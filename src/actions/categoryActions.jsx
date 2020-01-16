import { FETCH_CATEGORIES, NEW_CATEGORIES } from "../actions/types";
import axios from 'axios';

export function fetchCategories() {
    return async function (dispatch) {
        const categories = await axios.get("https://safestore.herokuapp.com/api/productCategory/",
                { headers: { 'Authorization': 'Bearer_eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNTc4NzQ3NjM2LCJleHAiOjE1Nzg3NTEyMzZ9.XwuPk53qihU26XIHqk54QK4DnDUkJcZyxXF_zwFSukc'}}
            );
        dispatch({
            type: FETCH_CATEGORIES,
            payload: categories
        })
    }
}
