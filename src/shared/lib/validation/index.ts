import * as yup from "yup";
import { phoneRegex } from "shared/lib/regexp";

export const validateEmail = (email: string) =>
  yup.string().email().isValidSync(email);

export const validatePhone = (phone: string) => phoneRegex.test(phone);
