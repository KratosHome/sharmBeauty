import { productTypes } from "../../types/productTypes";

export enum GetProductTypes {
    SET_PRODUCT_ENUM = "SET_PRODUCT_ENUM",
    IS_LOADING = "IS_LOADING"
}

interface setProduct {
    type: GetProductTypes.SET_PRODUCT_ENUM;
    product: productTypes[]
}

interface serIsLoading {
    type: GetProductTypes.IS_LOADING;
    loading: boolean
}

export type productType = setProduct | serIsLoading