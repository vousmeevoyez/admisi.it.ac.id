"use server";

import { registrationSchema } from "@/app/schemas/registration-schema";
import { ZodError } from "zod";

export type State =
  | {
      status: "success";
      message: string;
    }
  | {
      status: "error";
      message: string;
      errors?: Array<{
        path: string;
        message: string;
      }>;
    }
  | null;

export async function submitRegistration(
  prevState: State,
  data: FormData,
): Promise<State> {
  try {
    const parsed = registrationSchema.parse(data)

    return {
      status: "success",
      message: `Welcome`,
    };
  } catch (e) {
    console.log(e)
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data.",
        errors: e.issues.map((issue) => ({
          path: issue.path.join("."),
          message: `Server validation: ${issue.message}`,
        })),
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
