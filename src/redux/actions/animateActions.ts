import { AnimateActionsTypes } from "../type/animatedTupes"

export function animeteOpen() {
    return {
        type: AnimateActionsTypes.OPEN,
    }
}

export function animeteClose() {
    return {
        type: AnimateActionsTypes.CLOSE,
    }
}
