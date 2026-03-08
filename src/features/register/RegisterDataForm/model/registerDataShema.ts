import * as yup from "yup";

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export const registerDataShema = yup.object({
  password: yup
    .string()
    .min(8, "Минимальная длина пароля 8 символов")
    .required("Обязательное поле"),
  username: yup
    .string()
    .min(2, "Минимальное количество символов: 2")
    .max(20, "Максимальное количество символов: 20")
    .required("Обязательное поле"),
  firstName: yup
    .string()
    .min(2, "Минимальное количество символов: 2")
    .max(20, "Максимальное количество символов: 20")
    .required("Обязательное поле"),
  middleName: yup
    .string()
    .min(2, "Минимальное количество символов: 2")
    .max(20, "Максимальное количество символов: 20"), // второе имя
  secondName: yup
    .string()
    .min(2, "Минимальное количество символов: 2")
    .max(20, "Максимальное количество символов: 20")
    .required("Обязательное поле"), // фамилия
  gender: yup
    .mixed<Gender>()
    .oneOf(Object.values(Gender))
    .required("Обязательное поле"),
  birthDate: yup.string(),
});
