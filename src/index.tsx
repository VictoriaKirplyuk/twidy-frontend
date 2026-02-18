import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter";
import "./styles/index.scss";
import ThemeProvider from "./theme/ThemeProvider";

const element = document.getElementById("root");
const root = createRoot(element);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </BrowserRouter>,
);
