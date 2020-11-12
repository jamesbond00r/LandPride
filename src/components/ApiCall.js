import * as React from 'react';
import axios from 'axios';


var API = "https://www.landpride.com/applications/api/lp/products?key=GIDJBPweD1NHIH5a&products=dirtworking_rearBlades"

export default class ApiCall extends React.Component{
    state = {
   product_name: [],
   product_url: [],
   model_numbers: [],
   description: [],
   product_image: [],
}


async componentDidMount() {
   await axios.get(API)
      .then(res => {
        const Data = res.data.[0]
       
        
      console.log(Data)
        this.setState({ product_name:Data.product_name, product_url:Data.product_url,model_numbers:Data.model_numbers,description:Data.description,product_image:Data.product_image });
     
      })
  }



render(){
    return (
        <ul>
        <li>{this.state.product_name}</li>
         <li>{this.state.product_url}</li>
          <li>{this.state.model_numbers}</li>
           <li>{this.state.description}</li>
            <img src={this.state.product_image} alt="product image" />
        </ul>
        )
    }
}

