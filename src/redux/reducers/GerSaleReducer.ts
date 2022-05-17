import {saleTypes} from "../../types/saleTypes";
import {GetSaleTypes, saleTypesAction} from "../type/saleTupes";

interface intialStateTupe {
    sale: saleTypes[]
    loading: boolean
}

const initialState: intialStateTupe = {
    sale: [],
    loading: true
}

export const getSaleReduser = (state = initialState, action: saleTypesAction) => {
        switch (action.type) {
            case GetSaleTypes.SET_SALE_ENUM:
                return {
                    ...state,
                    sale: action.sale
                }
            case GetSaleTypes.IS_LOADING_SALE:
                return {
                    ...state,
                    loading: action.loading
                }
            default:
                return state;
        }
    }
;