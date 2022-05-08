import {AddToCardActionsTypes} from "../type/cardTypes";


export function cardActions(product: any) {
    return {
        type: AddToCardActionsTypes.ADD_PRODUCT_TO_CARD,
        data: {
            product: product,
        }
    }
}

export function addInCard(id: any) {
    return {
        type: AddToCardActionsTypes.PRODUCT_IN_CARD,
        id: id
    }
}