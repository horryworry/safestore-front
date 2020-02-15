import {SHOW_SEARCH, HIDE_SEARCH, CHANGE_SEARCH_STRING} from "../actions/types";

const initialState = {
    isHidden: true,
    searchString: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_SEARCH:
            return {
                isHidden: action.isHidden,
                searchString: action.searchString
            };
        case HIDE_SEARCH:
            return {
                isHidden: action.isHidden,
                searchString: action.searchString
            };
        case CHANGE_SEARCH_STRING:
            return {
                isHidden: action.isHidden,
                searchString: action.searchString
            };
        default:
            return state;
    }
}
