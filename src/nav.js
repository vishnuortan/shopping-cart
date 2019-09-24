import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import './css/nav.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import data from './images.js';
import Form from './form.js';
import Home from './home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Createaccount from './createaccount.js';
import store from './store.js';

export default class Nav extends React.Component{
	 constructor(props)
	 {
		 super(props);
		 this.state={
			 home:true,	 
			 create:false,
			 check:true
		 };
	 }
	
	createaccount=(click)=>{
		 if(click){
				this.setState({ home:false,click:true});
				}
	 }

	back_to_home=(click)=>{
		if(click){
				this.setState({ home:true,click:false});
				}
	 }
	 
	call=()=>{
		//console.log(store.getState().profile);
		this.setState({home:store.getState().navlink.home,create:store.getState().navlink.create});
	}
	
	render()
	{
		store.subscribe(this.call);
		return(
			<div id="root">
			
						{ this.state.home && <Home createaccount = {this.createaccount}  />	}
						{ this.state.create && <Createaccount back_to_home={this.back_to_home}/> }	
			</div>
			);
	}
	}