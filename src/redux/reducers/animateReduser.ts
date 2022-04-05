import { animateActions, AnimateActionsTypes } from "../type/animatedTupes";

interface AnimateState {
  animate: boolean;
}

const initialState: AnimateState = {
  animate: false,
};

export const animateReducer = (
  state = initialState,
  action: animateActions
): AnimateState => {
  switch (action.type) {
    case AnimateActionsTypes.OPEN:
      return { ...state, animate: (state.animate = true) };
    case AnimateActionsTypes.CLOSE:
      return { ...state, animate: (state.animate = false) };
    default:
      return state;
  }
};
