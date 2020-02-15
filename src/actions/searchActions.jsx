import {HIDE_SEARCH, SHOW_SEARCH, CHANGE_SEARCH_STRING} from "./types";
import store from "../store/store";

export function showSearch() {
    return async function (dispatch) {
        dispatch({
            type: SHOW_SEARCH,
            isHidden: false,
            searchString: store.getState().search.searchString
        })
    }
}

export function hideSearch() {
    return async function (dispatch) {
        dispatch({
            type: HIDE_SEARCH,
            isHidden: true,
            searchString: store.getState().search.searchString
        })
    }
}

export function changeSearchString(searchString) {
    return async function (dispatch) {
        dispatch({
            type: CHANGE_SEARCH_STRING,
            isHidden: store.getState().search.isHidden,
            searchString: searchString
        })
    }
}