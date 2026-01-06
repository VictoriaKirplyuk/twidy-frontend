import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";
import AppRouter from "./components/AppRouter";

const element = document.getElementById('root');
const root = createRoot(element);

root.render(
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
)