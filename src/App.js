import * as React from 'react';
import { Route, Link, BrowserRouter as Router, Switch,  } from 'react-router-dom'
import Routes from "./containers/Routes";

import Cards from "./components/Card.js"

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import store from "./store";

{/*  Import react and the card component, the import the store (state) and Provider  */}
{/* Provider is what connects redux to react, it gets wrapped around our app components */}
{/* and passes state down the component tree, it has to be passed the store */}



export default class App extends React.Component{
 
render(){
  return(
          <Provider store={store}>
          <Cards /> 
      </Provider>
    )
};
}

