import * as yup from "yup";
import { validateEmail, validatePhone } from "shared/lib/validation";

export const registerShema = yup.object({
  emailOrPhone: yup
    .string()
    .required("Обязательное поле")
    .test(
      "emailOrPhone",
      "Некорректный электронный адрес или номер телефона",
      (value) => validateEmail(value) || validatePhone(value),
    ),
});
