import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import mobileMenuReducer from "./mobileMenuReducer";
import searchReducer from "./searchReducer";
import headerTopReducer from "./headerTopReducer";
import filterReducer from "./filterReducer";
import colorReducer from "./colorReducer";
import productTab from "./ProductTabReducer";
import productReducer from "./ProductReducer";

const rootReducer = combineReducers({
    categories: categoryReducer,
    mobileMenu: mobileMenuReducer,
    search: searchReducer,
    headerTopDropdown: headerTopReducer,
    filter: filterReducer,
    color: colorReducer,
    productTab: productTab,
    productTabNavigation: productReducer
});

export default rootReducer;
