import "./Basket.css"
import BasketImg from "../../../img/icons/shopping-cart.png"
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import {rootState} from "../../../redux/reducers/rootReduser";

export const Basket: React.SFC<{}> = () => {

    const state = useSelector((state: rootState) => {
        return state.product.id
    })
    console.log()

    return (
        <div>
            <Link to="/card">
                <img className="UserAccountImg cardImg" src={BasketImg} alt="порівняння товару"/>
                {state.length > 1 ? (
                    <div className="addProudctInCard"></div>
                ) : null}
            </Link>
        </div>
    )
};