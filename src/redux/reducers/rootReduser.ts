import {combineReducers} from 'redux';
import {animateReducer} from './animateReduser';
import {cardReduser} from './cardReduser';
import {getProductReduser} from "./getProdcutReduser";


export const rootReducer = combineReducers({
    test: animateReducer,
    product: cardReduser,
    getProduct: getProductReduser
})

export type rootState = ReturnType<typeof rootReducer> 