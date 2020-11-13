import * as React from 'react';
import Cards from "./components/Card.js"
import Loader from './components/Loader';
import axios from 'axios';


var API = "https://www.landpride.com/applications/api/lp/products?key=GIDJBPweD1NHIH5a&products=dirtworking_rearBlades"

export default class App extends React.Component{
  
    state = {
   Data: [],
   loading:true,
}


async componentDidMount() {
   await axios.get(API)
      .then(res => {
        const Data = res.data
        this.setState({ Data:  Data  });
        this.setState({loading:false})
      })
  }
  
render(){
  return (
    
    <div>
    
    <Cards Data={this.state.Data} />
    
    </div>
    
  
  );
};
}

