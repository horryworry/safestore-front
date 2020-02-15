import { CHANGE_ACTIVE_FILTER_COLOR, CHANGE_ACTIVE_PRODUCT_COLOR } from "../actions/types";

const initialState = {
    filter: {
        text: ''
    },
    product: {
        text: ''
    }
};

export default function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_ACTIVE_FILTER_COLOR:
            return {
                filter: {
                    text: action.filter.text
                },
                product: {
                    text: action.product.text
                }
            };
        case CHANGE_ACTIVE_PRODUCT_COLOR:
            return {
                filter: {
                    text: action.filter.text
                },
                product: {
                    text: action.product.text
                }
            };
        default:
            return state;
    }
}
