"use client";

import { useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import {
  type FieldErrors,
  useForm,
  type UseFormRegister,
  type UseFormWatch,
  type FieldPath,
} from "react-hook-form";
import { SchoolSubjectEnum, StudyProgramEnum, type IRegistration, type State } from '@/types';
import { useFormState, useFormStatus } from "react-dom";
import { createRegistration } from "@/server/functions/registration";
import { registrationSchema } from "@/server/schemas/registration-schema";


function FormContent({
  register,
  isValid,
  errors,
  watch,
}: {
  register: UseFormRegister<IRegistration>;
  isValid: boolean;
  errors: FieldErrors<IRegistration>;
  watch: UseFormWatch<IRegistration>
}) {
  const { pending } = useFormStatus();
  const watchSchoolSubject = watch("schoolSubject")

  const noScienceNeededStudiesProgram = [
    StudyProgramEnum.SIPIL,
    StudyProgramEnum.ARSITEKTUR,
    StudyProgramEnum.INDUSTRI,
    StudyProgramEnum.PWK,
    StudyProgramEnum.TIP,
    StudyProgramEnum.TI,
    StudyProgramEnum.MANAJEMEN
  ]

  const scienceNeededStudiesProgram = [
    ...noScienceNeededStudiesProgram,
    StudyProgramEnum.ELEKTRO,
    StudyProgramEnum.MESIN,
    StudyProgramEnum.KIMIA,
  ]

  const submitButtonDefaultClassName = "btn btn-light btn-next btn-block"
  const submitButtonValidClassName = "btn btn-primary btn-next btn-block"

  function generateYearsArray(x: number) {
    const currentYear = new Date().getFullYear(); // Get the current year
    return Array.from({ length: x + 1 }, (_, i) => currentYear - i);
  }

  // Example usage
  const years = generateYearsArray(10);

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 "
          style={{
            height: '70pt'
          }}
        >
          <div className="form-group">
            <label
              htmlFor="fullName"
            >
              Nama Lengkap
              <span className="text-danger">
                *
              </span>
            </label>
            <input
              className="form-control"
              placeholder="Nama Lengkap"
              {...register("fullName")}
            />
            <span className="text-danger font-semibold text-sm">
              <ErrorMessage name="fullName" errors={errors} />
            </span>
          </div>
        </div>
        <div
          className="col-md-6 "
          style={{
            height: '70pt'
          }}
        >
          <div className="form-group">
            <label
              htmlFor="phoneNumber"
            >
              No. HP
              <span className="text-danger">
                *
              </span>
            </label>
            <input
              className="form-control"
              placeholder="081234567890"
              {...register("phoneNumber")}
            />
            <span className="text-danger font-semibold text-sm">
              <ErrorMessage name="phoneNumber" errors={errors} />
            </span>
          </div>
        </div>
        <div
          className="col-md-6 "
          style={{
            height: '70pt'
          }}
        >
          <div className="form-group">
            <label
              htmlFor="email"
            >
              Alamat Email
              <span className="text-danger">
                *
              </span>
            </label>
            <input
              className="form-control"
              placeholder="email@domain.com"
              type="email"
              {...register("email")}
            />
            <span className="text-danger font-semibold text-sm">
              <ErrorMessage name="email" errors={errors} />
            </span>
          </div>
        </div>
        <div
          className="col-md-6 "
          style={{
            height: '70pt'
          }}
        >
          <div className="form-group">
            <label
              htmlFor="school"
            >
              Asal Sekolah
              <span className="text-danger">
                *
              </span>
            </label>
            <input
              className="form-control"
              placeholder="Nama sekolah asal"
              {...register("school")}
            />
            <span className="text-danger font-semibold text-sm">
              <ErrorMessage name="school" errors={errors} />
            </span>
          </div>
        </div>
        <div
          className="col-md-6 "
          style={{
            height: '70pt'
          }}
        >
          <div className="form-group">
            <label
              htmlFor="schoolSubject"
            >
              Jurusan Sekolah
              <span className="text-danger">
                *
              </span>
            </label>
            <select
              className="form-control"
              {...register("schoolSubject")}
            >
              <option value="">Pilih jurusan sekolah</option>
              {Object.values(SchoolSubjectEnum).map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <span className="text-danger font-semibold text-sm">
              <ErrorMessage name="schoolSubject" errors={errors} />
            </span>
          </div>
        </div>
        <div
          className="col-md-6 "
          style={{
            height: '70pt'
          }}
        >
          <div className="form-group">
            <label
              htmlFor="graduationYear"
            >
              Tahun Lulus
              <span className="text-danger">
                *
              </span>
            </label>
            <select
              className="form-control"
              {...register("graduationYear")}
            >
              <option value="">Pilih tahun lulus</option>
              {Object.values(years).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <span className="text-danger font-semibold text-sm">
              <ErrorMessage name="graduationYear" errors={errors} />
            </span>
          </div>
        </div>
        <div
          className="col-md-6 "
          style={{
            height: '70pt'
          }}
        >
          <div className="form-group">
            <label
              htmlFor="reportScore"
            >
              Nilai Rapor
              <span className="text-danger">
                *
              </span>
            </label>
            <input
              className="form-control"
              placeholder="1 - 100"
              type="number"
              min="1" max="100" step="1"
              {...register("reportScore")}
            />
            <span className="text-danger font-semibold text-sm">
              <ErrorMessage name="reportScore" errors={errors} />
            </span>
          </div>
        </div>
        <div
          className="col-md-6 "
          style={{
            height: '70pt'
          }}
        >
          <div className="form-group">
            <label
              htmlFor="schoolSubject"
            >
              Program Studi
              <span className="text-danger">
                *
              </span>
            </label>
            <select
              className="form-control"
              {...register("studyProgram")}
            >
              <option value="">Pilih program studi</option>
              {watchSchoolSubject === SchoolSubjectEnum.IPA ? 
              Object.values(scienceNeededStudiesProgram).map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))
                :
              Object.values(noScienceNeededStudiesProgram).map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))
              }
            </select>
            <span className="text-danger font-semibold text-sm">
              <ErrorMessage name="studyProgram" errors={errors} />
            </span>
          </div>
        </div>
        <div
          className="col-md-6 "
          style={{
            height: '70pt'
          }}
        >
          <div className="form-group">
            <label
              htmlFor="referalCode"
            >
              Kode Unik Promo
            </label>
            <input
              className="form-control"
              placeholder="Kode Referal"
              type="referalCode"
              {...register("referalCode", { required: false })}
            />
            <span className="text-danger font-semibold text-sm">
              <ErrorMessage name="referalCode" errors={errors} />
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-md-12 "
          style={{
            height: '70pt'
          }}
        >
          <div className="d-flex flex-row align-items-center">
            <input
              className="form-check-input mb-2"
              type="checkbox"
              style={{ width: '20px', height: '20px' }}
              {...register("isChecked")}
            />
            <label className="form-check-label text-center" htmlFor="flexCheckDefault" style={{marginLeft: '5px', marginTop: '5px'}}>
              Dengan ini saya menyatakan bahwa data yang saya isikan dalam formulir ini adalah benar.
            </label>
          </div>
          </div>
      </div>

      <div className="f1-buttons">
        <div className="row">
          <div className="col-md-4 col-sm-4 ms-auto">
            <button
              className={isValid ? submitButtonValidClassName : submitButtonDefaultClassName}
              type="submit"
              disabled={pending || !isValid}
            >
              {pending ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                <>
                  Pembayaran
                  <i className="fa fa-arrow-right btn-icon-right" />
                </>
              }
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export function Form() {
  const {
    register,
    formState: { isValid, errors },
    setError,
    watch,
    reset,
  } = useForm<IRegistration>({
    mode: "all",
    resolver: zodResolver(registrationSchema),
  });
  const [state, formAction] = useFormState<State, FormData>(createRegistration, null);

  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.status === "error") {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<IRegistration>, {
          message: error.message,
        });
      });
    }
    if (state.status === "success") {
      alert(state.message);
      reset();
    }
  }, [state, setError, reset]);

  return (
    <form
      className="f1"
      action={formAction}>
      <FormContent register={register} isValid={isValid} errors={errors} watch={watch}/>
    </form>
  );
}
