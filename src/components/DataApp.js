import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";
import Card from './Card';
import * as React from "react";

function mapStateToProps(state){
	return{
		Data: state.Data,
		
	}
}

function mapDispachToProps(dispatch){

	return bindActionCreators(actionCreators, dispatch);

}

const DataApp = connect(mapStateToProps, mapDispachToProps)(Card);


export default DataApp;