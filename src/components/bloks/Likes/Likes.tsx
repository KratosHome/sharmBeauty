import * as React from "react";
import "./likes.css";
import like from "../../../img/icons/like.png";
import like_edd from "../../../img/icons/like_edd.png";
import { Link } from "react-router-dom";

export const Likes: React.SFC<{}> = () => {
  return (
    <div>
      <Link to="/likes">
        <img className="UserAccountImg" src={like} alt="UserAccount" />
      </Link>
    </div>
  );
};
