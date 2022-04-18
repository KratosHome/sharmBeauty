import "./ProductList.css"
import {MayButton} from "../../UL/MayButton/MayButton";
import heart from "../../../img/icons/heart.png"
import comparison from "../../../img/icons/comparisonBlack.png"
import {Link} from "react-router-dom";
import {MayRating} from "../Rating/Rating";

interface ProductType {
    product: any,
}

// Todo: -Likes, -comparison
export const ProductList: React.FC<ProductType> = ({product}: ProductType) => {

    return (
        <Link to={product.limk}>
            <div className="ProductListContainer row1 row2">
                <div className="productIcon">
                    <img className="icons" src={comparison}/>
                    <img className="icons" src={heart}/>
                </div>
                <div className="productContant">
                    <img className="ProductListImg" src={product.img}/>
                    <MayRating props={product.grade}/>
                    <div>{product.grade}</div>
                    <div>{product.nameDiscription}</div>
                    <div>{product.name}</div>
                    <div>{product.prise} грн.</div>
                    <div>{product.newPrise} грн.</div>
                    <div>{product.size} мл.</div>
                    <MayButton>ДО КОШИКУ</MayButton>
                </div>
            </div>
        </Link>
    )
};