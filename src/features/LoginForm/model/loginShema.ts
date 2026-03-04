import * as yup from "yup";
import { validateEmail, validatePhone } from "shared/lib/validation";

export const loginShema = yup.object({
  emailOrPhone: yup
    .string()
    .required("Обязательное поле")
    .test(
      "emailOrPhone",
      "Некорректный электронный адрес или номер телефона",
      (value) => validateEmail(value) || validatePhone(value),
    ),
  password: yup
    .string()
    .required("Обязательное поле")
    .min(8, "Минимальная длина пароля 8 символов"),
  rememberMe: yup.boolean(),
});
