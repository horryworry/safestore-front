import {
    DESCRIPTION_TAB_ACTIVE,
    CHARACTERISTICS_TAB_ACTIVE,
    REVIEWS_TAB_ACTIVE,
    DELIVERY_TAB_ACTIVE
} from "../actions/types"

const initialState = {
    descriptionTabIsActive: true,
    characteristicsTabIsActive: false,
    reviewTabIsActive: false,
    deliveryTabIsActive: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case DESCRIPTION_TAB_ACTIVE:
            return {
                descriptionTabIsActive: action.descriptionTabIsActive,
                characteristicsTabIsActive: action.characteristicsTabIsActive,
                reviewTabIsActive: action.reviewTabIsActive,
                deliveryTabIsActive: action.deliveryTabIsActive
            };
        case CHARACTERISTICS_TAB_ACTIVE:
            return {
                descriptionTabIsActive: action.descriptionTabIsActive,
                characteristicsTabIsActive: action.characteristicsTabIsActive,
                reviewTabIsActive: action.reviewTabIsActive,
                deliveryTabIsActive: action.deliveryTabIsActive
            };
        case REVIEWS_TAB_ACTIVE:
            return {
                descriptionTabIsActive: action.descriptionTabIsActive,
                characteristicsTabIsActive: action.characteristicsTabIsActive,
                reviewTabIsActive: action.reviewTabIsActive,
                deliveryTabIsActive: action.deliveryTabIsActive
            };
        case DELIVERY_TAB_ACTIVE:
            return {
                descriptionTabIsActive: action.descriptionTabIsActive,
                characteristicsTabIsActive: action.characteristicsTabIsActive,
                reviewTabIsActive: action.reviewTabIsActive,
                deliveryTabIsActive: action.deliveryTabIsActive
            };

        default:
            return state;
    }
}