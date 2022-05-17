import { saleTypes } from "../../types/saleTypes";

export enum GetSaleTypes {
    SET_SALE_ENUM = "SET_SALE_ENUM",
    IS_LOADING_SALE = "IS_LOADING_SALE"
}

interface setSale {
    type: GetSaleTypes.SET_SALE_ENUM;
    sale: saleTypes[]
}

interface serIsLoadingSale {
    type: GetSaleTypes.IS_LOADING_SALE;
    loading: boolean
}

export type saleTypesAction = setSale | serIsLoadingSale