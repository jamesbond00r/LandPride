import * as React from 'react';
import axios from 'axios';


var API = "https://www.landpride.com/applications/api/lp/products?key=GIDJBPweD1NHIH5a&products=dirtworking_rearBlades"

export default class ApiCall extends React.Component{
    state = {
   one: [],
   two: [],
   three: [],
   four: [],
   five: [],
   six: [],
   seven: [],
   eight: [],
   nine: [],
   
}


async componentDidMount() {
   await axios.get(API)
      .then(res => {
          
        const Data = res.data
         
      
        this.setState({ one: Data[0] , two: Data[1], three: Data[2], three: Data[2], four: Data[3], five: Data[4],six: Data[5],seven: Data[6],eight: Data[7],nine: Data[8],  });
      
      })
  }

    product_name
    product_url
    model_numbers
    description
    product_image




render(){
    return (
        <ul>
        {Object.values(this.state.one).map((keyName, i) =>(
            <li key={i}>
            {keyName}
            </li>
        ))}
        {Object.values(this.state.two).map((keyName, i) =>(
            <li key={i}>
            {keyName}
            </li>
        ))}
        {Object.values(this.state.three).map((keyName, i) =>(
            <li key={i}>
            {keyName}
            </li>
             ))}
            {Object.values(this.state.four).map((keyName, i) =>(
            <li key={i}>
            {keyName}
            </li>
             ))}
            {Object.values(this.state.five).map((keyName, i) =>(
            <li key={i}>
            {keyName}
            </li>
             ))}
            {Object.values(this.state.six).map((keyName, i) =>(
            <li key={i}>
            {keyName}
            </li>
             ))}
            {Object.values(this.state.seven).map((keyName, i) =>(
            <li key={i}>
            {keyName}
            </li>
             ))}
            {Object.values(this.state.eight).map((keyName, i) =>(
            <li key={i}>
            {keyName}
            </li>
             ))}{Object.values(this.state.nine).map((keyName, i) =>(
            <li key={i}>
            {keyName}
            </li>
        ))}
        
        
        </ul>
        )
    }
}

