import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import { router } from "app/router/router";

export function AppRouter(): ReactElement {
  return (
    <Routes>
      {router.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
