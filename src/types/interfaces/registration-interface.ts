import { type SchoolSubjectEnum } from "..";

export interface IRegistration {
  fullName: string;
  phoneNumber: string;
  email: string;
  school: string;
  schoolSubject: SchoolSubjectEnum;
  reportScore: string;
  graduationYear: string;
  studyProgram: string;
  referalCode?: string;
  isChecked: boolean;
}
