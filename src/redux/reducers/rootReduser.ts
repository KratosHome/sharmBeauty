import {combineReducers} from 'redux';
import {animateReducer} from './animateReduser';
import {cardReduser} from './cardReduser';
import { getSaleReduser } from './GerSaleReducer';
import {getProductReduser} from "./getProdcutReduser";


export const rootReducer = combineReducers({
    test: animateReducer,
    product: cardReduser ,
    getProduct: getProductReduser,
    sale: getSaleReduser,
})

export type rootState = ReturnType<typeof rootReducer> 