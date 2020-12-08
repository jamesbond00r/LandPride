import React, { Component } from "react";
import { connect } from "react-redux";
import { thunk_action_creator } from "../actions/fetchAction";
import CardList from "./CardList.js"


class Card extends Component {


 handleSubmit = e => {
   e.preventDefault();
   const productData = this.getProductData.value;
    this.props.dispatch(thunk_action_creator(productData));
    this.getProductData.value = "";
   

  };
  
 render() {
    console.log(this.props.data);
    return (
      <div>
      <h2>LandPride API search</h2>
      <form onSubmit={this.handleSubmit} className="form">
      <h2>Enter Product name</h2>
      <input
        type="text"
        placeholder="Enter product name"
        required
        ref={input => (this.getProductData = input)}
        />
        <button>Submit</button>
        </form>
      

 {this.props.data.isFetching ? <h3>Loading...</h3> : null}
        {this.props.data.isError ? (
<h3 className="error">No such product exists.</h3>
        ) : null}
        {Object.keys(this.props.data.Data).length > 0 ? (

<div>
<CardList Data={this.props.data.Data} Title={this.getProductData}/>
</div>
) : null}
</div>
);
};
}
const mapStateToProps = state => {
  return {
    data: state
  };
};
  

export default connect(mapStateToProps)(Card);