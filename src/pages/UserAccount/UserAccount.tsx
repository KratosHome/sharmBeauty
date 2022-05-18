import "./UserAccount.css";

import {UserAccountLogin} from "../UserAccountLogin/UserAccountLogin";

import {PersonalAccount} from "../PersonalAccount/PersonalAccount";


export const UserAccount = () => {


    return (
        <>

            <PersonalAccount/>

            <UserAccountLogin/>

        </>
    )
};
