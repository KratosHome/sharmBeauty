export enum AddToCardActionsTypes {
    ADD_PRODUCT_TO_CARD = "ADD_PRODUCT_TO_CARD",
    CHENGE_PRODUCT_QUANTITTY = "CHENGE_PRODUCT_QUANTITTY",
    REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART",
}

interface AddToCard {
    type: AddToCardActionsTypes.ADD_PRODUCT_TO_CARD;
    data: any
}

interface ChangeQuantity {
    type: AddToCardActionsTypes.CHENGE_PRODUCT_QUANTITTY;
}

interface RemoveProduct {
    type: AddToCardActionsTypes.REMOVE_PRODUCT_FROM_CART;
}

export type carActionType = AddToCard | ChangeQuantity | RemoveProduct