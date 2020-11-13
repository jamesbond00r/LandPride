import * as React from 'react';
import axios from 'axios';
import {uid} from 'react-uid';
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
        this.setState({ Data:  Data  });
      })
  }


render(){
    return (
        <div>
        <header id="content-header" className="content-header">             <h1 class="title" id="page-title"> Dirtworking </h1>
                        <div className="tabs"></div>
            
          </header>
        <div id="content-area" className="content-area">
        <div className="region region-content">
        <div id="block-views-f9efbc2227ed9aaff60fc9d87da279be" className="block block-views block-even">
        <div className="block-inner">
    <div className="content">
      <div className="view-content">
      
      {/*Map over data in state return data and key */}
        {this.state.Data.map((data, key) => {
          return (
            <div className="views-row-odd views-row-first product-list-display contextual-edit-region" key={uid(key)} >
            
{/* We use UID in the key so React has a unique key to be used for rendering arrays */}

              <h2 className="product-series-name"><a href={ data.product_url }>{data.product_name }</a> </h2>
              
          <div className="list-thumbnail"> <a href={ data.product_url }> <img typeOf="foaf:Image" width="375" height="375" src={ data.product_image } alt={data.product_name } /> </a></div>
          
             
             <div className="item-wrapper"> <div className="horsepower-teaser"> { data.model_numbers}</div>
             
             <div className="product-summary">
             
             { data.description }
             </div>
              </div>
              <a href= { data.product_url }>Link</a>
            </div>
          );
        })}
      </div>
      </div>
      </div>
       </div>
       </div>
        </div>
   </div>
   
   
  );
};
}



    
    
