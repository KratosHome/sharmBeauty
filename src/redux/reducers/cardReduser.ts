import {AddToCardActionsTypes, carActionType} from "../type/cardTypes";

interface CardStateType {
    id: number | null;
    size: string | null | any
}

const initialState: CardStateType = {
    id: null,
    size: ""
}

export const cardReduser = (state = initialState, action: carActionType) => {
    switch (action.type) {
        case AddToCardActionsTypes.ADD_PRODUCT_TO_CARD:
            return {
                ...state,
                size: action.data.size
            }
        default:
            return state;
    }
}