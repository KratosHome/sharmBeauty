import "./UserAccount.css";
import {useContext} from "react";
import {UserAccountLogin} from "../UserAccountLogin/UserAccountLogin";
// import {LoginContext} from "../../context/LoginContext";
import {PersonalAccount} from "../PersonalAccount/PersonalAccount";


export const UserAccount = () => {
    // const {isAuth} = useContext(LoginContext);

    return (
        <>

            <PersonalAccount/>

            <UserAccountLogin/>

        </>
    )
};
