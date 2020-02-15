import { SHOW_MODAL, HIDE_MODAL, CHANGE_WINDOW_SIZE } from "../actions/types";
import store from "../store/store";

export function showModal() {
    return async function (dispatch) {
        dispatch({
            type: SHOW_MODAL,
            boolean: true,
            screenWidth: store.getState().mobileMenu.screenWidth,
            screenHeight: store.getState().mobileMenu.screenHeight
        })
    }
}

export function hideModal() {
    return async function (dispatch) {
        dispatch({
            type: HIDE_MODAL,
            boolean: false,
            screenWidth: store.getState().mobileMenu.screenWidth,
            screenHeight: store.getState().mobileMenu.screenHeight
        })
    }
}

export function changeWindowSize() {
    return async function (dispatch) {
        dispatch({
            type: CHANGE_WINDOW_SIZE,
            boolean: store.getState().mobileMenu.mobileModalMenu,
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
        })
    }
}

