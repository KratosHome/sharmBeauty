import "./ProductPageItem.css"
import {ProductSelection} from "../../../components/bloks/ProductSelection/ProductSelection";
import {useState} from "react";
import {ProductImg} from "../ProductImg/ProductImg";
import {ProductСharacteristics} from "../ProductСharacteristics/ProductСharacteristics";
import {ProductTabs} from "../ProductTabs/ProductTabs";


interface ProductPage {
    item?: any;
}

export const ProductPageItem: React.FC<ProductPage> = ({item}) => {
    const [percentageDiscount, setPercentageDiscount] = useState()
    return (
        <div className="row1 row2">
            <div className="ProductPageContainer">
                <ProductImg img={item.cart_img}/>
                <ProductСharacteristics item={item}/>
                <div className="ProductSelectionContainer">
                    <ProductSelection product={item} setPercentageDiscount={setPercentageDiscount}/>
                </div>
            </div>
            <div>
               <ProductTabs/>
            </div>
        </div>
    )
};