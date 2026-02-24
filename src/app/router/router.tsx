import { ReactElement } from "react";
import { RouteNames } from "shared/constants/RouteNames";
import { NotFound } from "pages/NotFound";
import { Registration } from "pages/registration/ui/Registration";

interface IRouter {
  path: string;
  element: ReactElement;
}

// Разделить routes на default (доступные до регистрации) и routes доступные после.
export const router: IRouter[] = [
  { path: RouteNames.DEFAULT, element: <Registration /> },
  { path: RouteNames.NOT_FOUND, element: <NotFound /> },
  { path: RouteNames.SIGN_UP, element: <Registration /> },
];
