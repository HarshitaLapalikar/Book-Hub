import * as actionTypes from '../searchPage/searchConstants';


export const searchbar  = (values) => {
    return dispatch => {
        fetch("http://5c6fe4d169738000148aeb50.mockapi.io/search",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(values)
    })
    .then(response =>response.json())
    .then(response => {
        console.log(response, "response");  
        //localStorage.setItem("token", response.token);
            dispatch({
                 type: actionTypes.SEARCHING,
                 payload: response
            })        
            
    })  
        .catch(err => {
            console.log('error', err)
            alert("search failed");
        })
     
     }
    
    
};
