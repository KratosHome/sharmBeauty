import { MayButton } from "../../components/UL/MayButton/MayButton";
import "./PersonalAccount.css";
import { LoginContext } from '../../context/index';
import { useContext } from "react";

export const PersonalAccount: React.SFC<{}> = () => {
  const { isAuth, setIsAuth } = useContext(LoginContext);

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
