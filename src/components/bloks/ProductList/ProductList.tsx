import "./ProductList.css"
import heart from "../../../img/icons/heart.png"
import giftbox from "../../../img/icons/giftbox.png"
import comparison from "../../../img/icons/comparisonBlack.png"
import {Link} from "react-router-dom";
import {MayRating} from "../Rating/Rating";
import {ProductSelection} from "../ProductSelection/ProductSelection";
import {useEffect, useState} from "react";

interface ProductType {
    product: any,
}

// Todo: -Likes
// Todo: -Loader
// Todo: -filrwe
// Todo: -Lengeage
// Todo: -Менеше кода для прієма с API
// Todo: -Redux Thunk https://www.digitalocean.com/community/tutorials/redux-redux-thunk-ru

export const ProductList: React.FC<ProductType> = ({product}: ProductType) => {


    // sale
    const [percentageDiscount, setPercentageDiscount] = useState(1)
    useEffect(() => {
        let sale = ((product.prod[0].prise - product.prod[0].newPrise) / product.prod[0].prise * 100)
        setPercentageDiscount(Math.trunc(sale))
    }, [product])


    return (
        <div className="ProductListContainer row1 row2 ">
            <div className="productIcon">
                <img className="icons" src={comparison} alt="comparison"/>
                <img className="icons" src={heart} alt="heart"/>
            </div>
            <div className="lable">
                <div className="percentageDiscount">-{percentageDiscount}%</div>
                {product.present.length > 2
                    ? <img className="giftbox" src={giftbox} alt="giftbox"/>
                    : null
                }
            </div>
            <div className="productContant">
                <Link to={`/product/${product.link}`}>
                    <img className="ProductListImg" src={product.img} alt={product.name}/>
                    <MayRating props={product.grade}/>
                    <div className="catalogDiscription">{product.nameDiscription}</div>
                    <div className="catalogName">{product.name}</div>
                </Link>
                <ProductSelection
                    key={product.name}
                    product={product}
                    setPercentageDiscount={setPercentageDiscount}
                />
            </div>
        </div>

    )
};