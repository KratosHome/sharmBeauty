import * as React from "react";
import { Route, Routes } from "react-router";
import { ProviderRouter, UserPagaes } from "./router";
import { LoginContext } from "../context/index";

export const AppRouter: React.FC<{}> = () => {
  const { isAuth } = React.useContext(LoginContext);


  return (
    <>
      {isAuth ? (
        <Routes>
          {UserPagaes.map((rote) => (
            <Route key={rote.path} path={rote.path} element={rote.component} />
          ))}
        </Routes>
      ) : (
        <Routes>
          {ProviderRouter.map((rote) => (
            <Route key={rote.path} path={rote.path} element={rote.component} />
          ))}
        </Routes>
      )}
    </>
  );
};
