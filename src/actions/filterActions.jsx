import {HIDE_SELECT, SHOW_SELECT, CHANGE_TEXT_SELECT, SHOW_FILTER_MOBILE, HIDE_FILTER_MOBILE, SHOW_SORT_BY, HIDE_SORT_BY} from "./types";
import store from "../store/store";

export function openFilterSelect() {
    return async function (dispatch) {
        dispatch({
            type: SHOW_SELECT,
            isHidden: false,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: store.getState().filter.filterMobile.isHidden
            },
            sortBy: {
                isHidden: store.getState().filter.sortBy.isHidden,
                text: store.getState().filter.sortBy.text
            },
            showBy: {
                isHidden: store.getState().filter.showBy.isHidden,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

export function closeFilterSelect() {
    return async function (dispatch) {
        dispatch({
            type: HIDE_SELECT,
            isHidden: true,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: store.getState().filter.filterMobile.isHidden
            },
            sortBy: {
                isHidden: store.getState().filter.sortBy.isHidden,
                text: store.getState().filter.sortBy.text
            },
            showBy: {
                isHidden: store.getState().filter.showBy.isHidden,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

export function changeTextFilterSelect(text) {
    return async function (dispatch) {
        dispatch({
            type: CHANGE_TEXT_SELECT,
            isHidden: store.getState().filter.isHidden,
            text: text,
            filterMobile: {
                isHidden: store.getState().filter.filterMobile.isHidden
            },
            sortBy: {
                isHidden: store.getState().filter.sortBy.isHidden,
                text: store.getState().filter.sortBy.text
            },
            showBy: {
                isHidden: store.getState().filter.showBy.isHidden,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

export function openSortBy() {
    return async function (dispatch) {
        dispatch({
            type: SHOW_SORT_BY,
            isHidden: store.getState().filter.isHidden,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: store.getState().filter.filterMobile.isHidden
            },
            sortBy: {
                isHidden: false,
                text: store.getState().filter.sortBy.text
            },
            showBy: {
                isHidden: store.getState().filter.showBy.isHidden,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

export function closeSortBy() {
    return async function (dispatch) {
        dispatch({
            type: HIDE_SORT_BY,
            isHidden: store.getState().filter.isHidden,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: store.getState().filter.filterMobile.isHidden
            },
            sortBy: {
                isHidden: true,
                text: store.getState().filter.sortBy.text
            },
            showBy: {
                isHidden: store.getState().filter.showBy.isHidden,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

export function changeTextSortBy(text) {
    return async function (dispatch) {
        dispatch({
            type: CHANGE_TEXT_SELECT,
            isHidden: store.getState().filter.isHidden,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: store.getState().filter.filterMobile.isHidden
            },
            sortBy: {
                isHidden: store.getState().filter.sortBy.isHidden,
                text: text
            },
            showBy: {
                isHidden: store.getState().filter.showBy.isHidden,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

export function openShowBy() {
    return async function (dispatch) {
        dispatch({
            type: SHOW_SORT_BY,
            isHidden: store.getState().filter.isHidden,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: store.getState().filter.filterMobile.isHidden
            },
            sortBy: {
                isHidden: store.getState().filter.sortBy.isHidden,
                text: store.getState().filter.sortBy.text
            },
            showBy: {
                isHidden: false,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

export function closeShowBy() {
    return async function (dispatch) {
        dispatch({
            type: HIDE_SORT_BY,
            isHidden: store.getState().filter.isHidden,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: store.getState().filter.filterMobile.isHidden
            },
            sortBy: {
                isHidden: store.getState().filter.sortBy.isHidden,
                text: store.getState().filter.sortBy.text
            },
            showBy: {
                isHidden: true,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

export function changeTextShowBy(text) {
    return async function (dispatch) {
        dispatch({
            type: CHANGE_TEXT_SELECT,
            isHidden: store.getState().filter.isHidden,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: store.getState().filter.filterMobile.isHidden
            },
            sortBy: {
                isHidden: store.getState().filter.sortBy.isHidden,
                text: store.getState().filter.sortBy.text,
            },
            showBy: {
                isHidden: store.getState().filter.showBy.isHidden,
                text: text
            }
        })
    }
}

export function openFilterMobile() {
    return async function (dispatch) {
        dispatch({
            type: SHOW_FILTER_MOBILE,
            isHidden: store.getState().filter.isHidden,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: false
            },
            sortBy: {
                isHidden: store.getState().filter.sortBy.isHidden,
                text: store.getState().filter.sortBy.text
            },
            showBy: {
                isHidden: store.getState().filter.showBy.isHidden,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

export function closeFilterMobile() {
    return async function (dispatch) {
        dispatch({
            type: HIDE_FILTER_MOBILE,
            isHidden: store.getState().filter.isHidden,
            text: store.getState().filter.text,
            filterMobile: {
                isHidden: true
            },
            sortBy: {
                isHidden: store.getState().filter.sortBy.isHidden,
                text: store.getState().filter.sortBy.text
            },
            showBy: {
                isHidden: store.getState().filter.showBy.isHidden,
                text: store.getState().filter.showBy.text
            }
        })
    }
}

