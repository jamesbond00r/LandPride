import * as React from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './APiCall.css'

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
   ten: [],
   
}


async componentDidMount() {
   await axios.get(API)
      .then(res => {
          
        const Data = res.data
        
        
        {/* this is taking the object and making it an array */}
        const entries = Object.values(Data[0]);
        
      
            console.log(entries);
        
        
      
        this.setState({ one: Object.values(Data[0]) , two: Object.values(Data[1]), three: Object.values(Data[2]), four: Object.values(Data[3]),  five: Object.values(Data[4]),six: Data[5],seven: Object.values(Data[6]),eight: Object.values(Data[7]),nine: Object.values(Data[8]),ten: Object.values(Data[9]),  });
      
      })
  }

    product_name
    product_url
    model_numbers
    description
    product_image




render(){
    return (
     
     
     
 
     <React.Fragment>
     {/*A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.*/}
        <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.one.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.one.[2] } { this.state.one.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.one.[4] }
            </Card.Text>
            <a href={ this.state.one.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
          
            
            <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.two.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.two.[2] } { this.state.two.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.two.[4] }
            </Card.Text>
            <a href={ this.state.two.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
           
           <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.three.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.three.[2] } { this.state.three.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.three.[4] }
            </Card.Text>
            <a href={ this.state.three.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
           
           
           <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.four.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.four.[2] } { this.state.four.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.four.[4] }
            </Card.Text>
            <a href={ this.state.four.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
           
           
           
             <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.five.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.five.[2] } { this.state.five.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.five.[4] }
            </Card.Text>
            <a href={ this.state.five.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
           
           
             <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.six.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.six.[2] } { this.state.six.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.six.[4] }
            </Card.Text>
            <a href={ this.state.six.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
           
           <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.seven.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.seven.[2] } { this.state.seven.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.seven.[4] }
            </Card.Text>
            <a href={ this.state.seven.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
           
            <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.eight.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.eight.[2] } { this.state.eight.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.eight.[4] }
            </Card.Text>
            <a href={ this.state.eight.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
           
           
            <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.nine.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.nine.[2] } { this.state.nine.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.nine.[4] }
            </Card.Text>
            <a href={ this.state.nine.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
           
           
           <Card className="floatL" style={{ width: '30em' }}>
        <Card.Img className="smallPic" variant="top" src={ this.state.ten.[8] } />
        <Card.Body>
            
            <Card.Title>{ this.state.ten.[2] } { this.state.ten.[3] }</Card.Title>
            
            <Card.Text>
            { this.state.ten.[4] }
            </Card.Text>
            <a href={ this.state.ten.[1] }>Link</a> 
            
            </Card.Body>
           </Card>
           
         </React.Fragment>
        )
    }
}

