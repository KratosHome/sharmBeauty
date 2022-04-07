import * as React from "react";
import "./UserAccount.css";
import userEnter from "../../../img/icons/enter.png";
import userExit from "../../../img/icons/euser.png";
import { Link } from "react-router-dom";

export const UserAccount: React.FC<{}> = () => {
  return (
    <div>
      <Link to="/login">
        <img className="UserAccountImg" src={userEnter} alt="UserAccount" />
      </Link>
    </div>
  );
};
