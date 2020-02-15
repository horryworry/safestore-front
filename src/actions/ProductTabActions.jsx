import {
    DESCRIPTION_TAB_ACTIVE,
    CHARACTERISTICS_TAB_ACTIVE,
    REVIEWS_TAB_ACTIVE,
    DELIVERY_TAB_ACTIVE
} from "./types"

export function descriptionTabIsActive() {
    return async function (dispatch) {
        dispatch({
            type: DESCRIPTION_TAB_ACTIVE,
            descriptionTabIsActive: true,
            characteristicsTabIsActive: false,
            reviewTabIsActive: false,
            deliveryTabIsActive: false
        })
    }
}

export function characteristicsTabIsActive() {
    return async function (dispatch) {
        dispatch({
            type: CHARACTERISTICS_TAB_ACTIVE,
            descriptionTabIsActive: false,
            characteristicsTabIsActive: true,
            reviewTabIsActive: false,
            deliveryTabIsActive: false
        })
    }
}

export function reviewTabIsActive() {
    return async function (dispatch) {
        dispatch({
            type: REVIEWS_TAB_ACTIVE,
            descriptionTabIsActive: false,
            characteristicsTabIsActive: false,
            reviewTabIsActive: true,
            deliveryTabIsActive: false
        })
    }
}

export function deliveryTabIsActive() {
    return async function (dispatch) {
        dispatch({
            type: DELIVERY_TAB_ACTIVE,
            descriptionTabIsActive: false,
            characteristicsTabIsActive: false,
            reviewTabIsActive: false,
            deliveryTabIsActive: true
        })
    }
}
