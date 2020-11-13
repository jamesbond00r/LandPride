import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner'


class Loader extends Component {
  render() {
    return(
        <div>
        <h1>Loading <Spinner animation="grow" variant="primary" /><Spinner animation="grow" variant="primary" /><Spinner animation="grow" variant="primary" /></h1>
 
        </div>
        )
    ;
  }
}
export default Loader;