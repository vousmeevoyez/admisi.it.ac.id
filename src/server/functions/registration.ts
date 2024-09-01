'use server';
import { redirect } from 'next/navigation'
import { serverRegistrationSchema } from "@/server/schemas/registration-schema";
import { sql } from 'drizzle-orm';
import { eq, and, between } from 'drizzle-orm/expressions';
import { db } from '@/server/db';
import { registrationTable } from '@/server/db/schema';
import { type State } from "@/types";

async function generateUniqueCode(maxAttempts = 10): Promise<number> {
  let attempts = 0;

  while (attempts < maxAttempts) {
    const uniqueCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(startOfDay.getDate() + 1);

    const [result] = await db.select({
      codeCount: sql<number>`COUNT(*)`.as('codeCount')
    })
    .from(registrationTable)
    .where(and(
      eq(registrationTable.uniqueCode, uniqueCode),
      between(registrationTable.createdAt, startOfDay, endOfDay),
      eq(registrationTable.isPaymentConfirmed, 0)
    ));

    const codeCount = result?.codeCount ?? 0;

    if (codeCount === 0) {
      return uniqueCode;
    }

    attempts++;
  }

  throw new Error('Unable to generate a unique code after maximum attempts');
}

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
    const uniqueCode = await generateUniqueCode();

    try{
      const record = await db.insert(registrationTable).values({...data, 
        reportScore: Number(reportScore),
        graduationYear: Number(graduationYear),
        createdAt: new Date(),
        uniqueCode,
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
    const query = new URLSearchParams({phoneNumber, fullName, studyProgram, id, uniqueCode: uniqueCode.toString()}).toString()
    redirect(`/payment?${query}`);
};
