import * as React from "react";
import { Link } from "react-router-dom";
import comparisonImg from "../../../img/icons/comparison.png"

export const Comparison: React.SFC<{}> = () => {
  return (
    <div>
      <Link to="/products">
        <img className="UserAccountImg" src={comparisonImg} alt="порівняння товару" />
      </Link>
    </div>
  );
};
