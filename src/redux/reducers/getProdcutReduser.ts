import {GetProductTypes, productType} from "../type/getProductType";

const initialState: any = {
    products: [],
}

export const getProductReduser = (state = initialState, action: productType) => {
        switch (action.type) {
            case GetProductTypes.SET_PRODUCT_ENUM:
                return {
                    ...state,
                    products: action.product
                }
            default:
                return state;
        }
    }
;