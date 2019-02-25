import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter , Route } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer.index'
import * as serviceWorker from './serviceWorker';
import Search from './searchPage/screen/Searchpage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = composeEnhancer(applyMiddleware(thunk))(createStore)(reducer);

ReactDOM.render(  
    <Provider store={store}>
    <BrowserRouter>
             <div>
                 
             <Route exact path='/' component={App}/>
             <Route path='/searchPage' component={Search}/> 

             </div>
             
    
    </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
