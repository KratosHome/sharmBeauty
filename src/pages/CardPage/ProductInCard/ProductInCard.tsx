import React from 'react';
import {useTypeSelector} from "../../../hooks/useTupeSelecrot";
import {productTypes} from "../../../types/productTypes";

export const ProductInCard = () => {
    const {product} = useTypeSelector(
        (state) => state.product);

    console.log(product)
    return (
        <>
            {product.map((item: productTypes) =>
                <div key={item.name}>
                    {item.name}
                </div>
            )}
        </>
    );
};

