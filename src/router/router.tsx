import App from "../components/App";
import {ReactElement} from "react";
import NotFound from "../components/NotFound";
import {RouteNames} from "../enums/RouteNames";

interface IRouter {
    path: string;
    element: ReactElement;
}

export const router: IRouter[] = [
    {path: RouteNames.DEFAULT, element: <App/>},
    {path: RouteNames.NOT_FOUND, element: <NotFound/>},
]