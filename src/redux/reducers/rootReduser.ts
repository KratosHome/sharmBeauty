import {combineReducers} from 'redux';
import {animateReducer} from './animateReduser';
import {cardReduser} from './cardReduser';


export const rootReducer = combineReducers({
    test: animateReducer,
    product: cardReduser
})

export type rootState = ReturnType<typeof rootReducer> 