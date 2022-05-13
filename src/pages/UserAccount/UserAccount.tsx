import React, {useContext} from "react";

import {PersonalAccount} from "../PersonalAccount/PersonalAccount";
import "./UserAccount.css";
import {LoginContext} from "../../context/index";
import {UserAccountLogin} from "../UserAccountLogin/UserAccountLogin";

export const UserAccount = () => {
    const {isAuth} = useContext(LoginContext);

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
