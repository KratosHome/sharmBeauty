import "./ProductPageItem.css"
import {ProductSelection} from "../../../components/bloks/ProductSelection/ProductSelection";
import {useState} from "react";
import {ProductImg} from "../ProductImg/ProductImg";

interface ProductPage {
    item?: any;
}

export const ProductPageItem: React.FC<ProductPage> = ({item}) => {

    const [percentageDiscount, setPercentageDiscount] = useState()
    return (
        <div className="row1 row2">
            <div className="ProductPageContainer">
                <div>
                    <ProductImg img={item.cart_img}/>

                </div>
                <div>
                    <h1>{item.name}</h1>
                    <div>Бренд: {item.brend}</div>
                    <div>Країна: {item.countri}</div>
                    <div>Стать: {item.female}</div>
                    <div>Тип аромату: {item.aroma_type}</div>
                    <div>Начальна нота: {item.initial_note}</div>
                    <div>Нота сердця: {item.heart_note}</div>
                    <div>Кінцева нота: {item.final_note}</div>
                </div>
                <div>
                    <ProductSelection product={item} setPercentageDiscount={setPercentageDiscount}/>
                </div>
            </div>
            <div>
                <div>Коментарій</div>
                <div>Покупок на сайте</div>
            </div>
        </div>
    )
};