import { FETCH_CATEGORIES, NEW_CATEGORIES } from "../actions/types";
import axios from 'axios';

export function fetchCategories() {
    return async function (dispatch) {
        const categories = await axios.get("https://safestore.herokuapp.com/api/productCategory/",
                { headers: { 'Authorization': 'Bearer_eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNTc5NzkzNTc1LCJleHAiOjE1Nzk3OTcxNzV9.LLSHgoxaa22Jh7VSA4_v5s_8NgcJ3bz1qtgHoiIggp4'}}
            );
        dispatch({
            type: FETCH_CATEGORIES,
            payload: categories
        })
    }
}
