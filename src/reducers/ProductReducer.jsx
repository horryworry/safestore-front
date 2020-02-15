import { CHANGE_CONTAINER_WIDTH } from "../actions/types";

const initialState = {
    containerWidth: 0
};

export default function(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CONTAINER_WIDTH:
            return {
                containerWidth: action.containerWidth
            };
        default:
            return state;
    }
}
