import { ReactElement } from "react";
import NotFound from "pages/NotFound/ui/NotFound";
import { App } from "app/App";
import { RouteNames } from "app/router/enums/RouteNames";

interface IRouter {
  path: string;
  element: ReactElement;
}

// Разделить routes на default (доступные до регистрации) и routes доступные после.
export const router: IRouter[] = [
  { path: RouteNames.DEFAULT, element: <App /> },
  { path: RouteNames.NOT_FOUND, element: <NotFound /> },
];
