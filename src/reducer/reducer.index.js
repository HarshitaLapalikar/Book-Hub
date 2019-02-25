import { combineReducers } from 'redux';
import auth from '../authLogin/authReducer';
import search from '../searchPage/search.reducer';


const reducer = combineReducers ({
    auth,
    search

}) 

export default reducer;