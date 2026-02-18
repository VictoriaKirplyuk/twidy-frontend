import { ReactElement } from "react";
import RouteNames from "../enums/RouteNames";
import NotFound from "../components/NotFound";
import App from "../components/App";

interface IRouter {
  path: string;
  element: ReactElement;
}

// Разделить routes на default (доступные до регистрации) и routes доступные после.
const router: IRouter[] = [
  { path: RouteNames.DEFAULT, element: <App /> },
  { path: RouteNames.NOT_FOUND, element: <NotFound /> },
];

export default router;
