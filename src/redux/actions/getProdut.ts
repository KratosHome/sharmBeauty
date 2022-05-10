import {ProductSetverNew} from "../../API/ProductServer";
import {GetProductTypes} from "../type/getProductType";
import { Dispatch } from 'redux';


export const setProductAction = (product: any) => {
    return {
        type: GetProductTypes.SET_PRODUCT_ENUM,
        product: product
    }
}

export const getProductAction = () => (dispatch: Dispatch) => {
      ProductSetverNew.getProducts().then((response: any) => {
            dispatch(setProductAction(response.data));
        })
}


