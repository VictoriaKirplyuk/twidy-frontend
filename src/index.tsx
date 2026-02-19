import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRouter } from "app/router/AppRouter";
import "app/styles/index.scss";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";

const element = document.getElementById("root");
const root = createRoot(element);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </BrowserRouter>,
);
