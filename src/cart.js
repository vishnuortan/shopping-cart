import React from "react";
import ReactDom from "react-dom";
import store from './store.js';
import './css/cart.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 import './font-awesome-4.7.0/css/font-awesome.css';
 import Cartselect from './cartselect.js';
 import Emptycart from './emptycart.js';
				
export default class Cart extends React.Component{
	constructor(props){
		super(props);
		this.state={
			cart:store.getState().cart
		}
	}
	render()
	{
		return(	
		<div>
			{ this.state.cart.length && <Cartselect/> }
			{ (this.state.cart.length==0) && <Emptycart/> }
		</div>
		);
		
	}
}