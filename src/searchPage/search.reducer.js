import * as actionTypes from '../searchPage/searchConstants';

const InitialState = {
    loading : false,
    books : []

};

const search_reducer = (state= InitialState, action) => {
    switch(action.type){
        case actionTypes.SEARCH_START:
        return{...state,  loading:true};
        case actionTypes.SEARCHING:
        return{...state, books: action.payload, loading:false};
        case actionTypes.SEARCH_FAIL:
        return{...state, error: action.error, loading:false};
        default:
        return state;
    }

}
export default search_reducer;