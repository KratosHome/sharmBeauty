import * as React from "react";
import { Route, Routes } from "react-router";
import { ProviderRouter } from "./router";
import { LoginContext } from "../context/index";

export const AppRouter: React.FC<{}> = () => {
  const { isAuth } = React.useContext(LoginContext);

    console.log(isAuth)
  return (
    <>
      <Routes>
        {ProviderRouter.map((rote) => (
          <Route key={rote.path} path={rote.path} element={rote.component} />
        ))}
      </Routes>
    </>
  );
};
