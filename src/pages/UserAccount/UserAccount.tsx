import "./UserAccount.css";
import  {useContext} from "react";
import {UserAccountLogin} from "../UserAccountLogin/UserAccountLogin";
import {PersonalAccount} from "../PersonalAccount/PersonalAccount";
import {LoginContext} from "../../context/index";


export const UserAccount = () => {
    const {isAuth} = useContext(LoginContext);
    console.log(LoginContext)
    return (
        <>
            {
                isAuth
                    ?
                    <PersonalAccount/>
                    :
                    <UserAccountLogin/>
            }
        </>
    )
};
