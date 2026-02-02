import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import router from "../router/router";

function AppRouter(): ReactElement {
  return (
    <Routes>
      {router.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default AppRouter;
