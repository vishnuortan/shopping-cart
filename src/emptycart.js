import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Emptycart extends React.Component{
	render(){
		return(
						<div id="emptycart" >
							cart is empty go back and purchase some items
							<div id="homelink"><Link to="/" ><button id="homebutton">ekart<i class="fa fa-shopping-cart " aria-hidden="true"></i></button></Link></div>
						</div>
				);
	}
}