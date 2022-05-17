import "./Basket.css"
import BasketImg from "../../../img/icons/shopping-cart.png"
import {Link} from 'react-router-dom';
import {useTypeSelector} from "../../../hooks/useTupeSelecrot";

export const Basket = () => {
    const {product} = useTypeSelector(
        (state) => state.product);

    return (
        <div>
            <Link to="/card">
                <img className="UserAccountImg cardImg" src={BasketImg} alt="порівняння товару"/>
                {product.length ? (
                    <div className="addProudctInCard"></div>
                ) : null}
            </Link>
        </div>
    )
};