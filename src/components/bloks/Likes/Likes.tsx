import "./likes.css";
import like from "../../../img/icons/like.png";
import { Link } from "react-router-dom";

export const Likes = () => {
  return (
    <div>
      <Link to="/likes">
        <img className="UserAccountImg" src={like} alt="UserAccount" />
      </Link>
    </div>
  );
};
