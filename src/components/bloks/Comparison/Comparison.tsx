import { Link } from "react-router-dom";
import comparisonImg from "../../../img/icons/comparison.png"

export const Comparison = () => {
  return (
    <div>
      <Link to="/products">
        <img className="UserAccountImg" src={comparisonImg} alt="порівняння товару" />
      </Link>
    </div>
  );
};
