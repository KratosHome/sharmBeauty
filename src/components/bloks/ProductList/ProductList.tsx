import "./ProductList.css"
import {MayButton} from "../../UL/MayButton/MayButton";
import heart from "../../../img/icons/heart.png"
import comparison from "../../../img/icons/comparisonBlack.png"
import {Link} from "react-router-dom";
import {MayRating} from "../Rating/Rating";
import {ProductSelection} from "../ProductSelection/ProductSelection";

interface ProductType {
    product: any,
}

// Todo: -Likes, -comparison
export const ProductList: React.FC<ProductType> = ({product}: ProductType) => {

    return (
        <div className="ProductListContainer row1 row2">
            <div>sale</div>
            <div>prezent</div>
            <div className="productIcon">
                <img className="icons" src={comparison}/>
                <img className="icons" src={heart}/>
            </div>
            <div className="productContant">
                <Link to={product.link}>
                    <img className="ProductListImg" src={product.img}/>
                </Link>

                <MayRating props={product.grade}/>
                <div>{product.nameDiscription}</div>
                <div className='catalogName'>{product.name}</div>
                <ProductSelection key={product.name} product={product}/>
                <MayButton>ДО КОШИКУ</MayButton>
            </div>
        </div>

    )
};