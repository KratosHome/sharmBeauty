import {useEffect, useState} from "react";
import { concat } from "lodash";

interface ProductAddInCardIntefase {
    state: any
    item: any
}

export const ProductAddInCard: React.FC<ProductAddInCardIntefase> = ({state, item}) => {

    const [getProductInCard, setGetProduct] = useState()


    let bla = item.prod.filter((i: any) => i.id.includes(state.map((i: any) => i)));






    return (
        <>
            {item ?
                <div>{item.name}</div>
                :
                <div>vsdfvdf</div>
            }
        </>
    )
};