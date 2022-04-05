
import { type } from 'os';
import { combineReducers } from 'redux';
import { animateReducer } from './animateReduser';


export const rootReducer = combineReducers({
    animate: animateReducer
})

export type rootState = ReturnType<typeof rootReducer> 