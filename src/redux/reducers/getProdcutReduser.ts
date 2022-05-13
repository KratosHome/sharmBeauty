import {GetProductTypes, productType} from "../type/getProductType";
import {productTypes} from "../../types/productTypes";

interface intialStateTupe {
    products: productTypes[]
    loading: boolean
}

const initialState: intialStateTupe = {
    products: [],
    loading: true
}

export const getProductReduser = (state = initialState, action: productType) => {
        switch (action.type) {
            case GetProductTypes.SET_PRODUCT_ENUM:
                return {
                    ...state,
                    products: action.product
                }
            case GetProductTypes.IS_LOADING:
                return {
                    ...state,
                    loading: action.loading
                }
            default:
                return state;
        }
    }
;