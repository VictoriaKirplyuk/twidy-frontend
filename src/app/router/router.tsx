import { ReactElement } from "react";
import { RouteNames } from "shared/constants/RouteNames";
import { RegisterPage } from "pages/auth/register/ui/RegisterPage";
import { LoginPage } from "pages/auth/login/LoginPage";
import { ForgotPasswordPage } from "pages/auth/forgot-password/ForgotPasswordPage";
import { NotFoundPage } from "pages/notFound";

interface IRouter {
  path: string;
  element: ReactElement;
}

// Разделить routes на default (доступные до регистрации) и routes доступные после.
export const router: IRouter[] = [
  { path: RouteNames.DEFAULT, element: <LoginPage /> },
  { path: RouteNames.LOGIN, element: <LoginPage /> },
  { path: RouteNames.REGISTER, element: <RegisterPage /> },
  { path: RouteNames.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
  { path: RouteNames.NOT_FOUND, element: <NotFoundPage /> },
];
