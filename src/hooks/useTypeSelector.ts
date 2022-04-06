
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootState } from '../redux/reducers/rootReduser';

export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector
