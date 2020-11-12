import * as React from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

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
        
        
        {/* this is taking the object and making it an array */}
        const entries = Object.values(Data[0]);
        
      
            console.log(entries);
        
        
      
        this.setState({ one: Object.values(Data[0]) , two: Object.values(Data[1]), three: Object.values(Data[2]), three: Object.values(Data[2]), four: Object.values(Data[3]), five: Object.values(Data[4]),six: Data[5],seven: Object.values(Data[6]),eight: Object.values(Data[7]),nine: Object.values(Data[8]),  });
      
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
        
            <li key = {nanoid()}>
           <p> Model Number { this.state.one.[3] }</p>
            <a href={ this.state.one.[1] }>Link</a> 
             <p>{ this.state.one.[2] } </p> 
              <p>Description</p>{ this.state.one.[4] } 
               <img src={ this.state.one.[8] } /> 
                
            </li>
        
         <li key = {nanoid()}>
           <p> Model Number { this.state.two.[3] }</p>
            <a href={ this.state.two.[1] }>Link</a> 
             <p>{ this.state.two.[2] } </p> 
              <p>Description</p>{ this.state.two.[4] } 
               <img src={ this.state.two.[8] } /> 
                
            </li>
        
        
         <li key = {nanoid()}>
           <p> Model Number { this.state.three.[3] }</p>
            <a href={ this.state.three.[1] }>Link</a> 
             <p>{ this.state.three.[2] } </p> 
              <p>Description</p>{ this.state.three.[4] } 
               <img src={ this.state.three.[8] } /> 
                
            </li>
           
            <li key = {nanoid()}>
           <p> Model Number { this.state.four.[3] }</p>
            <a href={ this.state.four.[1] }>Link</a> 
             <p>{ this.state.four.[2] } </p> 
              <p>Description</p>{ this.state.four.[4] } 
               <img src={ this.state.four.[8] } /> 
                
            </li>
           
           
             <li key = {nanoid()}>
           <p> Model Number { this.state.five.[3] }</p>
            <a href={ this.state.five.[1] }>Link</a> 
             <p>{ this.state.five.[2] } </p> 
              <p>Description</p>{ this.state.five.[4] } 
               <img src={ this.state.five.[8] } /> 
                
            </li>
            
             <li key = {nanoid()}>
           <p> Model Number { this.state.six.[3] }</p>
            <a href={ this.state.six.[1] }>Link</a> 
             <p>{ this.state.six.[2] } </p> 
              <p>Description</p>{ this.state.six.[4] } 
               <img src={ this.state.six.[8] } /> 
                
            </li>
            
             <li key = {nanoid()}>
           <p> Model Number { this.state.seven.[3] }</p>
            <a href={ this.state.seven.[1] }>Link</a> 
             <p>{ this.state.seven.[2] } </p> 
              <p>Description</p>{ this.state.one.[4] } 
               <img src={ this.state.seven.[8] } /> 
                
            </li>
            
             <li key = {nanoid()}>
           <p> Model Number { this.state.eight.[3] }</p>
            <a href={ this.state.eight.[1] }>Link</a> 
             <p>{ this.state.eight.[2] } </p> 
              <p>Description</p>{ this.state.eight.[4] } 
               <img src={ this.state.eight.[8] } /> 
                
            </li>
        
        </ul>
        )
    }
}

