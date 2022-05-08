import {useEffect, useState} from "react";
import ProductServer from "../API/ProductServer";



export const useGetProduct = (getProduct: any, setGetProduct :any) => {

    async function fetchProducts() {
        const getProduct = await ProductServer.ProductPage();
        setGetProduct(getProduct);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return getProduct
}
