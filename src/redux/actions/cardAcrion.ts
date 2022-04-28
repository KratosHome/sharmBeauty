import {AddToCardActionsTypes} from "../type/cardTypes";


export function cardActions(size: string,) {
    return {
        type: AddToCardActionsTypes.ADD_PRODUCT_TO_CARD,
        data: {
            size: size,
        }
    }
}