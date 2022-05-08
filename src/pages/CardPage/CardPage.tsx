import "./CardPage.css"
import {useSelector} from "react-redux";
import {rootState} from "../../redux/reducers/rootReduser";
import {ProductNone} from "./ProductNone/ProductNone";
import {ProductAddInCard} from "./ProductAdd/ProductAdd";
import {useGetProduct} from "../../hooks/useGetProduct";
import {useEffect, useState} from "react";
import ProductServer from "../../API/ProductServer";

export const CardPage: React.SFC<{}> = () => {


    const [getProduct, setGetProduct] = useState<any>([]);

    async function fetchProducts() {
        const getProduct = await ProductServer.ProductPage();
        setGetProduct(getProduct);
    }

    useEffect(() => {
        fetchProducts();
    }, []);
/*
    const state = useSelector((state: rootState) => {
        return state.product.id
    })

    let bla2 = getProduct.filter((i: any) =>
        i.prod.filter((i: any) => i.id.search(state) !== -1) === i.brend)
*/


    return (
        <>

                <ProductNone/>

        </>
    )
};