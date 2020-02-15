import { SHOW_SELECT, HIDE_SELECT, CHANGE_TEXT_SELECT, SHOW_FILTER_MOBILE, HIDE_FILTER_MOBILE, SHOW_SORT_BY, HIDE_SORT_BY } from "../actions/types";

const initialState = {
    isHidden: true,
    text: 'Пол',
    filterMobile: {
        isHidden: true
    },
    sortBy: {
        isHidden: true,
        text: 'популярности'
    },
    showBy: {
        isHidden: true,
        text: '12'
    }
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_SELECT:
            return {
                isHidden: action.isHidden,
                text: action.text,
                filterMobile: {
                    isHidden: action.filterMobile.isHidden
                },
                sortBy: {
                    isHidden: action.sortBy.isHidden,
                    text: action.sortBy.text
                },
                showBy: {
                    isHidden: action.showBy.isHidden,
                    text: action.showBy.text
                }
            };
        case HIDE_SELECT:
            return {
                isHidden: action.isHidden,
                text: action.text,
                filterMobile: {
                    isHidden: action.filterMobile.isHidden
                },
                sortBy: {
                    isHidden: action.sortBy.isHidden,
                    text: action.sortBy.text
                },
                showBy: {
                    isHidden: action.showBy.isHidden,
                    text: action.showBy.text
                }
            };
        case CHANGE_TEXT_SELECT:
            return {
                isHidden: action.isHidden,
                text: action.text,
                filterMobile: {
                    isHidden: action.filterMobile.isHidden
                },
                sortBy: {
                    isHidden: action.sortBy.isHidden,
                    text: action.sortBy.text
                },
                showBy: {
                    isHidden: action.showBy.isHidden,
                    text: action.showBy.text
                }
            };
        case SHOW_FILTER_MOBILE:
            return {
                isHidden: action.isHidden,
                text: action.text,
                filterMobile: {
                    isHidden: action.filterMobile.isHidden
                },
                sortBy: {
                    isHidden: action.sortBy.isHidden,
                    text: action.sortBy.text
                },
                showBy: {
                    isHidden: action.showBy.isHidden,
                    text: action.showBy.text
                }
            };
        case HIDE_FILTER_MOBILE:
            return {
                isHidden: action.isHidden,
                text: action.text,
                filterMobile: {
                    isHidden: action.filterMobile.isHidden
                },
                sortBy: {
                    isHidden: action.sortBy.isHidden,
                    text: action.sortBy.text
                },
                showBy: {
                    isHidden: action.showBy.isHidden,
                    text: action.showBy.text
                }
            };
        case SHOW_SORT_BY:
            return {
                isHidden: action.isHidden,
                text: action.text,
                filterMobile: {
                    isHidden: action.filterMobile.isHidden
                },
                sortBy: {
                    isHidden: action.sortBy.isHidden,
                    text: action.sortBy.text
                },
                showBy: {
                    isHidden: action.showBy.isHidden,
                    text: action.showBy.text
                }
            };
        case HIDE_SORT_BY:
            return {
                isHidden: action.isHidden,
                text: action.text,
                filterMobile: {
                    isHidden: action.filterMobile.isHidden
                },
                sortBy: {
                    isHidden: action.sortBy.isHidden,
                    text: action.sortBy.text
                },
                showBy: {
                    isHidden: action.showBy.isHidden,
                    text: action.showBy.text
                }
            };
        default:
            return state;
    }
}
