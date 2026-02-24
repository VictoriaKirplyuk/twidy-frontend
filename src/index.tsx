import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "app/styles/index.scss";
import ThemeProvider from "shared/providers/ThemeProvider/ui/ThemeProvider";
import { App } from "app/App";

const element = document.getElementById("root");
const root = createRoot(element);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
