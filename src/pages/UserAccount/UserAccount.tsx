import "./UserAccount.css";
import {useContext} from "react";
import {UserAccountLogin} from "../UserAccountLogin/UserAccountLogin";
import {LoginContext} from "../../context";
import {PersonalAccount} from "../PersonalAccount/PersonalAccount";


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
