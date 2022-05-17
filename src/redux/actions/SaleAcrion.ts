
import {Dispatch} from 'redux';
import {GetSaleTypes} from "../type/saleTupes";
import {saleTypes} from "../../types/saleTypes";
import {SaleServer} from "../../API/SaleServer";


export const setSaleAction = (sale: saleTypes) => {
    return {
        type: GetSaleTypes.SET_SALE_ENUM,
        sale: sale
    }
}

export const setLoadingSale = (loading: boolean) => {
    return {
        type: GetSaleTypes.IS_LOADING_SALE,
        loading: loading
    }
}

export const getSaleAction = () => async (dispatch: Dispatch) => {
    dispatch(setLoadingSale(true))
    let response = await SaleServer.getSale()
    dispatch(setSaleAction(response.data));
    dispatch(setLoadingSale(false))
}

