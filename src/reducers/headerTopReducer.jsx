import { OPEN_HEADER_SUBNAV, CLOSE_HEADER_SUBNAV } from "../actions/types";

const initialState = {
    isHidden: true
};

export default function(state = initialState, action) {
    switch(action.type) {
        case OPEN_HEADER_SUBNAV:
            return {
                isHidden: action.isHidden
            };
        case CLOSE_HEADER_SUBNAV:
            return {
                isHidden: action.isHidden
            };
        default:
            return state;
    }
}
