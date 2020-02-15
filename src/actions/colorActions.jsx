import {CHANGE_ACTIVE_FILTER_COLOR, CHANGE_ACTIVE_PRODUCT_COLOR} from "./types";
import store from "../store/store";

export function changeActiveFilterColor(text) {
    return async function (dispatch) {
        dispatch({
            type: CHANGE_ACTIVE_FILTER_COLOR,
            filter: {
                text: text
            },
            product: {
                text: store.getState().color.product.text
            }
        })
    }
}

export function changeActiveProductColor(text) {
    return async function (dispatch) {
        dispatch({
            type: CHANGE_ACTIVE_PRODUCT_COLOR,
            filter: {
                text: store.getState().color.filter.text
            },
            product: {
                text: text
            }
        })
    }
}