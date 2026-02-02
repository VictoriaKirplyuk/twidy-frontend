import { ReactElement } from "react";
import RouteNames from "../enums/RouteNames";
import NotFound from "../components/NotFound";
import App from "../components/App";

interface IRouter {
  path: string;
  element: ReactElement;
}

const router: IRouter[] = [
  { path: RouteNames.DEFAULT, element: <App /> },
  { path: RouteNames.NOT_FOUND, element: <NotFound /> },
];

export default router;
