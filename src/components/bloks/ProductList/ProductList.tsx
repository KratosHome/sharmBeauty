import "./ProductList.css"
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
                <img className="icons" src={comparison} alt="comparison"/>
                <img className="icons" src={heart} alt="heart"/>
            </div>
            <div className="productContant">
                <Link to={product.link}>
                    <img className="ProductListImg" src={product.img} alt={product.name}/>
                </Link>

                <MayRating props={product.grade}/>
                <div>{product.nameDiscription}</div>
                <div className='catalogName'>{product.name}</div>
                <ProductSelection key={product.name} product={product}/>
            </div>
        </div>

    )
};