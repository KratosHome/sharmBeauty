import * as React from 'react';
import BasketImg from "../../../img/icons/shopping-cart.png"
import { Link } from 'react-router-dom';

export const Basket: React.SFC<{}> = () => {
    return (
        <div>
        <Link to="/products">
          <img className="UserAccountImg" src={BasketImg} alt="порівняння товару" />
        </Link>
      </div>
    )
};