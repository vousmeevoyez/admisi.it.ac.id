import { z } from "zod";
import { SchoolSubjectEnum, StudyProgramEnum } from '@/types';
import { zfd } from "zod-form-data";

const indonesianPhoneNumberSchema = z.string().refine((val) => {
  const regex = /^(08|\+628|628)\d{8,11}$/;
  return regex.test(val);
}, {
  message: "Nomor hp tidak valid. Gunakan format 08XXX, +628XXX, atau 628XXX",
});

const baseRegistrationSchema = {
  fullName: z.string().min(1, {message: "Nama lengkap tidak boleh kosong"}),
  phoneNumber: indonesianPhoneNumberSchema,
  email: z.string().email({message: "Email tidak valid"}),
  school: z.string().min(1, {message: "Asal sekolah tidak boleh kosong"}),
  schoolSubject: z.nativeEnum(SchoolSubjectEnum, {message: "Silahkan pilih jurusan sekolah"}),
  reportScore: z.preprocess((val) => parseFloat(val as string), z.number({message: "Nilai raport tidak boleh kosong"}).positive({message: "Nilai rapor tidak valid"})),
  graduationYear: z.string().min(4, {message: "Tahun lulus tidak valid"}),
  studyProgram: z.nativeEnum(StudyProgramEnum, {message: "Silahkan pilih studi program"}),
  referalCode: z.string().optional(),
};

export const registrationSchema = zfd.formData({
  ...baseRegistrationSchema,
  isChecked: z.literal<boolean>(true)
});

export const serverRegistrationSchema = zfd.formData(baseRegistrationSchema);
