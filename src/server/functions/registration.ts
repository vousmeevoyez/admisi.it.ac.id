'use server';
import { serverRegistrationSchema } from "@/server/schemas/registration-schema";
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

    try{
      await db.insert(registrationTable).values({...data, 
        reportScore: Number(reportScore),
        graduationYear: Number(graduationYear),
        createdAt: new Date()
      });
    }catch(error){
      return {
        status: "error",
        message: "Submit data gagal silahkan coba lagi, jika masih terus gagal silahkan hubungi tim support kami.",
      };
    }

    return {
      "status" : "success",
      "message": "Data berhasil di submit"
    }
};
