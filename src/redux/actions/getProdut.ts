import {ProductSetverNew} from "../../API/ProductServer";
import {GetProductTypes} from "../type/getProductType";
import {Dispatch} from 'redux';
import {productTypes} from "../../types/productTypes";


export const setProductAction = (product: productTypes) => {
    return {
        type: GetProductTypes.SET_PRODUCT_ENUM,
        product: product
    }
}

export const setLoading = (loading: boolean) => {
    return {
        type: GetProductTypes.IS_LOADING,
        loading: loading
    }
}

export const getProductAction = () => async (dispatch: Dispatch) => {
    dispatch(setLoading(true))
    let response = await ProductSetverNew.getProducts()
    dispatch(setProductAction(response.data));
    dispatch(setLoading(false))
}

/*
export const getProductAction = () => (dispatch: Dispatch) => {
      ProductSetverNew.getProducts().then((response: any) => {
            dispatch(setProductAction(response.data));
        })
}
 */

