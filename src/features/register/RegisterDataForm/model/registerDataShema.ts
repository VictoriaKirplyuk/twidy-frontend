import * as yup from "yup";

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export const registerDataShema = yup.object({
  password: yup.string().required(),
  username: yup.string().required(),
  firstName: yup.string().required(),
  middleName: yup.string(), // второе имя
  secondName: yup.string().required(), // фамилия
  gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).required(),
  birthDate: yup.string(),
});
