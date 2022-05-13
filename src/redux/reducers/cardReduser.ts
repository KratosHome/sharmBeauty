import {AddToCardActionsTypes, carActionType} from "../type/cardTypes";

const initialState: any = {
    product: [],
    addToCard: [],
    count: 0
}

export const cardReduser = (state = initialState, action: carActionType) => {
        switch (action.type) {
            case AddToCardActionsTypes.ADD_PRODUCT_TO_CARD:
                return {
                    ...state,
                    product: [...state.product, action.data.product],
                }
            case AddToCardActionsTypes.PRODUCT_IN_CARD:
                return {
                    ...state,
                    addToCard: [...state.addToCard, action.id]

                    // [...state.addToCard.filter((id: any) => id != action.id)]
                }
            default:
                return state;
        }
    }
;