import {AddToCardActionsTypes} from "../type/cardTypes";


export function cardActions(id: any) {
    return {
        type: AddToCardActionsTypes.ADD_PRODUCT_TO_CARD,
        data: {
            id: id,
        }
    }
}