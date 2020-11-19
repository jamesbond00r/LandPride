import * as React from 'react';
import Cards from "./components/Card.js"
import Loader from './components/Loader';
import axios from 'axios';
import { Route, Link, BrowserRouter as Router, Switch,  } from 'react-router-dom'
import Routes from "./containers/Routes";
import store from './stores';
import { Provider } from 'react-redux';
{/*State is in parent component so it can pass down different state to children */}


{/*Api Call */}
var API = "https://www.landpride.com/applications/api/lp/products?key=GIDJBPweD1NHIH5a&products="
var Title = "dirtworking_grapples"



{/*A little Error handling */}
function handleError (error){
  console.warn(error);
  return null;
}


{/*Set the state to empty array and loading to true for user feedback */}
export default class App extends React.Component{
  
    state = {
   Data: [],
   loading:true,
}




async componentDidMount() {
   await axios.get(API+Title)
      .then(res => {
        const Data = res.data
        this.setState({ Data:  Data  });
        this.setState({loading:false})
    {/*Wait for Compoenent to Mount */}
      })
      .catch(handleError)
  }
  
render(){
 
    {/* If its is still loading (waiting for APi call) then Loader displays - if loading is flase will display  product screen */}
    
    if (this.state.loading) return <div> <Loader /> </div>;
    
  return <Provider store={store}> <div> <Cards  /> </div> </Provider>
    
 
};
}

