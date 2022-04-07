import * as React from "react";
import search from "../../../img/icons/search.png";
import { Link } from "react-router-dom";

export const Search: React.SFC<{}> = () => {
  return (
    <div>
      <Link to="/products">
        <img className="UserAccountImg" src={search} alt="пошук" />
      </Link>
    </div>
  );
};
