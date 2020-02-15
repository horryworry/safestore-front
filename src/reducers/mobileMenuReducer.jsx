import {SHOW_MODAL, HIDE_MODAL, CHANGE_WINDOW_SIZE} from "../actions/types";

const initialState = {
    mobileModalMenu: false,
    screenHeight: 0,
    screenWidth: 0
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_MODAL:
            return {
                mobileModalMenu: action.boolean,
                screenHeight: action.screenHeight,
                screenWidth: action.screenWidth
            };
        case HIDE_MODAL:
            return {
                mobileModalMenu: action.boolean,
                screenHeight: action.screenHeight,
                screenWidth: action.screenWidth
            };
        case CHANGE_WINDOW_SIZE:
            return {
                mobileModalMenu: action.boolean,
                screenHeight: action.screenHeight,
                screenWidth: action.screenWidth
            };
        default:
            return state;
    }
}
