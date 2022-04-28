import {AddToCardActionsTypes, carActionType} from "../type/cardTypes";

interface CardStateType {
    id: any
}

const initialState: CardStateType = {
    id: [],
}

export const cardReduser = (state = initialState, action: carActionType) => {
    switch (action.type) {
        case AddToCardActionsTypes.ADD_PRODUCT_TO_CARD:
            return {
                ...state,
                id: [...state.id, action.data.id]
            }
        default:
            return state;
    }
}