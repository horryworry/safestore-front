import { CHANGE_CONTAINER_WIDTH } from "../actions/types";

export function changeContainerWidth(width) {
    return async function (dispatch) {
        dispatch({
            type: CHANGE_CONTAINER_WIDTH,
            containerWidth: width,
        })
    }
}
