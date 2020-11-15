import * as React from 'react';
import Cards from "./components/Card.js"
import Loader from './components/Loader';
import axios from 'axios';
import { Route, Link, BrowserRouter as Router, Switch,  } from 'react-router-dom'
import Routes from "./containers/Routes";


var API = "https://www.landpride.com/applications/api/lp/products?key=GIDJBPweD1NHIH5a&products="
var Title = "dirtworking_grapples"

function handleError (error){
  console.warn(error);
  return null;
}

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
    
      })
      .catch(handleError)
  }
  
render(){
 
    
    if (this.state.loading) return <div> <Loader /> </div>;
    
  return <div> <Cards Data={this.state.Data} Title={this.state.Title} /> </div>
    
 
};
}

