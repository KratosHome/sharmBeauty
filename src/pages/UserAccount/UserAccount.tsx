import  React from "react";

import { PersonalAccount } from "../PersonalAccount/PersonalAccount";
import "./UserAccount.css";
import { LoginContext } from "../../context/index";
import { UserAccountLogin } from "../UserAccountLogin/UserAccountLogin";

export const UserAccount: React.SFC<{}> = () => {
  const { isAuth } = React.useContext(LoginContext);

  return <>{isAuth ? <PersonalAccount /> : <UserAccountLogin />}</>;
};
