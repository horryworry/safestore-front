import {OPEN_HEADER_SUBNAV, CLOSE_HEADER_SUBNAV} from "./types";

export function openHeaderSubnav() {
    return async function (dispatch) {
        dispatch({
            type: OPEN_HEADER_SUBNAV,
            isHidden: false
        })
    }
}

export function closeHeaderSubnav() {
    return async function (dispatch) {
        dispatch({
            type: CLOSE_HEADER_SUBNAV,
            isHidden: true
        })
    }
}
