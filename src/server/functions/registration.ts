'use server';
import { redirect } from 'next/navigation'
import { serverRegistrationSchema } from "@/server/schemas/registration-schema";
import { sql } from 'drizzle-orm';
import { eq } from 'drizzle-orm/expressions';
import { db } from '@/server/db';
import { registrationTable } from '@/server/db/schema';
import { type State } from "@/types";

export async function createRegistration (
  prevState: State,
  payload: FormData,
): Promise<State> {
    const validatedPayload = serverRegistrationSchema.safeParse(payload)

    if (!validatedPayload.success) {
      const {error} = validatedPayload;
      return {
        status: "error",
        message: "Invalid form data.",
        errors: error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }

    const {data: {
      reportScore,
      graduationYear,
      ...data
    }} = validatedPayload;

    // check if email exist
    const {email} = data;
    const [emailRecord] = await db.select({
        emailCount: sql`COUNT(*)`
    })
    .from(registrationTable)
    .where(eq(registrationTable.email, email));

    const emailExists = emailRecord?.emailCount as number > 0;
    if (emailExists) {
      return {
        status: "error",
        message: "Duplicate data",
        errors: [{
          path: "email",
          message: `Email ${email} telah terdaftar`,
        }],
      };
    }

    // check if phoneNumber exist
    const {phoneNumber} = data;
    const [phoneNumberRecord] = await db.select({
        phoneNumberCount: sql`COUNT(*)`
    })
    .from(registrationTable)
    .where(eq(registrationTable.phoneNumber, phoneNumber));

    const phoneNumberExists = phoneNumberRecord?.phoneNumberCount as number > 0;
    if (phoneNumberExists) {
      return {
        status: "error",
        message: "Duplicate data",
        errors: [{
          path: "phoneNumber",
          message: `Nomor hp ${phoneNumber} telah terdaftar`,
        }],
      };
    }

    let id;

    try{
      const record = await db.insert(registrationTable).values({...data, 
        reportScore: Number(reportScore),
        graduationYear: Number(graduationYear),
        createdAt: new Date()
      }).returning()

      id = record[0]?.id.toString();
    }catch(error){
      return {
        status: "error",
        message: "Submit data gagal silahkan coba lagi, jika masih terus gagal silahkan hubungi tim support kami.",
      };
    }

    if(!id) throw new Error('id not found')

    const {fullName, studyProgram} = data;
    const query = new URLSearchParams({phoneNumber, fullName, studyProgram, id}).toString()
    redirect(`/payment?${query}`);
};
