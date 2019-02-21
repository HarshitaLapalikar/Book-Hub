import * as actionTypes from '././authConstants';
import { createBrowserHistory } from 'history';


export const history = createBrowserHistory();

export const auth = (values) => {
        return dispatch => {
        fetch("http://18.223.218.199:8080/api/v1.0/users/login/",{

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
            //alert("logged in")
            
            //     console.log("api successful", response);
                localStorage.setItem("token", response.token);
            //     alert("before dispatch");
                dispatch({
                     type: actionTypes.AUTH_SUCCESS,
                     payload: response.token
                })
               // alert("after dispatch");
            
           // alert("outside if")
              console.log(localStorage.getItem('token'), "token");
              window.location.href = "/searchPage";
        
    })  
            .catch(err => {
                console.log('error', err)
                alert("Authentication failed");
            })
         
         }
        
        
   };
