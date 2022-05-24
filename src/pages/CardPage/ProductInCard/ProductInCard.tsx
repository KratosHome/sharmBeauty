import "./ProductInCard.css"
import {useTypeSelector} from "../../../hooks/useTupeSelecrot";
import {prodTypes, productTypes} from "../../../types/productTypes";
import {useEffect, useState} from "react";

export const ProductInCard = () => {
    const {product, addToCard} = useTypeSelector(
        (state) => state.product);


    let bla = product.map((item: any) => item.prod.filter((item: any) => item.id === addToCard.join(" ")))
    console.log(bla)


    return (
        <>
            {product.map((item: productTypes) =>
                <div key={Math.random()} className="ProductInCardContainer">
                    <img className="ProductInCardImg" src={item.img} alt={item.name}/>
                    <div>{item.name}</div>
                    <div>цена</div>
                    <div>кількість</div>
                    <div>сумма</div>
                </div>
            )}
        </>
    );
};

