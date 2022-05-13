import "./Basket.css"
import BasketImg from "../../../img/icons/shopping-cart.png"
import {Link} from 'react-router-dom';
import {useTypeSelector} from "../../../hooks/useTupeSelecrot";

export const Basket: React.SFC<{}> = () => {
    const { products} = useTypeSelector(
        (state) => state.getProduct);

    return (
        <div>
            <Link to="/card">
                <img className="UserAccountImg cardImg" src={BasketImg} alt="порівняння товару"/>
                {products.length ? (
                    <div className="addProudctInCard"></div>
                ) : null}
            </Link>
        </div>
    )
};