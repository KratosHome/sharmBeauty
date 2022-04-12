import * as React from "react";
import { MayButton } from "../../components/UL/MayButton/MayButton";
import "./PersonalAccount.css";
import { LoginContext } from '../../context/index';

export const PersonalAccount: React.SFC<{}> = () => {
  const { isAuth, setIsAuth } = React.useContext(LoginContext);

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div>
      PersonalAccount
      <MayButton onClick={logOut}>Вийти</MayButton>
    </div>
  );
};
