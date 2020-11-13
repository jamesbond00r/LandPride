import * as React from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './APiCall.css'

var API = "https://www.landpride.com/applications/api/lp/products?key=GIDJBPweD1NHIH5a&products=dirtworking_rearBlades"

export default class ApiCall extends React.Component{
    state = {
   Data: [],
   
   
}


async componentDidMount() {
   await axios.get(API)
      .then(res => {
          
        const Data = res.data
        const newData = [ ]
        
        Data.forEach(Data => { for (let p in Data) newData.push(p, Data[p])  });
        
        this.setState({ Data:  Data  });
       
       console.log(this.state.Data)
       
      })
  }




render(){
    return (
    
      <div className="stock-container">
        {this.state.Data.map((data, key) => {
          return (
            <div key={key}>
              {data.product_url }
            </div>
          );
        })}
      </div>
   
  );
};
}