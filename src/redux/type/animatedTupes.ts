export enum AnimateActionsTypes {
  OPEN = "OPEN",
  CLOSE = "CLOSE",
}

interface FetshAnimateActionsOpen {
  type: AnimateActionsTypes.OPEN;
}

interface FetshAnimateActionsClose {
  type: AnimateActionsTypes.CLOSE;
}

export type animateActions = FetshAnimateActionsOpen | FetshAnimateActionsClose;
