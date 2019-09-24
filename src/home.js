import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import './css/home.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import data  from './images.js';
import Form from './form.js';
import Nav from './nav.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createaccount from './createaccount.js';
import store  from './store.js';

export default class Home extends React.Component
{
	constructor(props){
		super(props);
		this.state={
			index:0,
			apperOffer: true,
			img:data.img[0],
			user:"",
			createaccount_link:false,
			search:store.getState().searchitem,
			searching:'',
			changesearch:""
			};
			//this.props.createlink=this.props.createlink.bind(this);
			
		}

	ekart =(e)=>{
		window.location.reload(); 
	}
	nxtimg =(e) =>{
		console.log(e.target.name);
		console.log(this.state.user);
		let temp=Number(this.state.index);
		if(e.target.name=="decrement"){
			
			//document.getElementById("offer1").style.animation = "fadein 0.5s";
			temp=(temp-1+5)%5;
			this.setState({
				index:temp,
				img:data.img[temp],
				
			});
		}	
		if(e.target.name=="increment"){
			//document.getElementById(offer1").style.animation = "fadeout 0.5s";
			temp=(temp+1+5)%5;
			this.setState({
				index:temp,
				img:data.img[temp]
			});
		}
	}
	login=()=>{
			document.getElementById("login-border").style.display = "block";
			document.getElementById("login").style.display = "block";
			document.getElementById("close").style.display = "block";
	}
	login_close=()=>{
		document.getElementById("login-border").style.display = "none";
		document.getElementById("login").style.display = "none";
		document.getElementById("close").style.display = "none";
	}
	validate=()=>{
		if(store.getState().validate.login){
			this.setState({user:store.getState().validate.user});
			document.getElementById("login-border").style.display = "none";
			document.getElementById("login").style.display = "none";
			document.getElementById("close").style.display = "none";
			document.getElementById("navb2").style.display = "none";
			document.getElementById("navb3").style.display = "block";
		}
	}


	user_access=()=>{
			let temp = document.getElementById("user-access").style.display;
			if(temp=="none")
				document.getElementById("user-access").style.display="block";
			else	
				document.getElementById("user-access").style.display="none";
		}

	logout=()=>{
		document.getElementById("navb2").style.display = "block";
		document.getElementById("navb3").style.display = "none";
		document.getElementById("user-access").style.display="none";
	}
	search=(e)=>{
		let value=e.target.value;
		this.setState({searching:value});
	}
	searchresult=()=>{
		let search=this.state.search;
		let searching=this.state.searching;
		let state=[];
		console.log("search");
		console.log(searching);
		let check:false;
		if(searching.length!=0){
			for(let i=0;i<search.length;i++)
			{
				if(search[i].startsWith(searching))
				{
					let content=search[i];
					console.log(search);
					check=true;
					state.push(
					<div class="searchitem" onClick={()=>this.changesearch(content)}>{search[i]}</div>
					);
				}
			}
			if(!check){
				return(<div class="searchitem">no result found</div>);
			}
			return state;
		}
		
	}
	changesearch=(content)=>{
		console.log(content);
		this.setState({searching:''});
		document.getElementById("search").value=content;
	}
	searchpropogate=(e)=>{
		let value=this.refs.search.value;
		if(value==''){
			e.preventDefault();
		}
		store.dispatch({type:"search",text:value});
	}
	render()
	{
		store.subscribe(this.validate);
		const {apperOffer,img} = this.state;
		 return(
			<div id="pag1">
				<navbar>
					<div class="nav">
						<div class="nav1"><button  id="navb1" onClick={this.ekart}>ekart <i class="fa fa-shopping-cart c1" aria-hidden="true"></i></button></div>
						<div class="nav2"><input type="text" id="search" ref="search"  placeholder="Search products..." onChange={this.search}/><Link to="/search" class="searchlink"><i class="fa fa-search searchicon" aria-hidden="true" onClick={this.searchpropogate}></i></Link></div>
						<div class="searchresult">{this.searchresult()}</div>
						<div class="nav3"><button  id="navb2" onClick={this.login}>Login<i class="fa fa-user c2" aria-hidden="true"></i></button>
							<div id="login-border"></div>
										<div id="login"><Form /></div>
										<div id="close" onClick={this.login_close}><i class="fa fa-times" aria-hidden="true"></i></div>
							</div>
							
							<button  id="navb3" onClick={this.user_access}>{this.state.user}<i class="fa fa-user c2" aria-hidden="true"></i></button>
							<div id="user-access" onClick={this.logout}>
								<button id="navb5">Logout<i class="fa fa-sign-out" aria-hidden="true"></i></button>
							</div>
						</div>
						<div id="nav4"><div id="cartlength">{store.getState().cart.length/3}</div><Link to="/cart"><button id="navb4">cart<i class="fa fa-cart-arrow-down c2" aria-hidden="true"></i></button></Link></div>
				</navbar>
				<div class="category">
					<div  class="category1">Electronics<i class="fa fa-caret-down c0" aria-hidden="true"></i><div class="element">
						<div class="le no"><Link to="/trimmer" class="model_link"><div class="content">Trimmer</div></Link></div>
						<div class="le no"><Link to="/watches" class="model_link"><div class="content">watches</div></Link></div>
						<div class="le"><Link to="/earphones" class="model_link"><div class="content">earphones</div></Link></div>
					</div>
					</div>	
					<div class="category2">Tv&appliances<i class="fa fa-caret-down c0" aria-hidden="true"></i><div class="element">
					<div class="le no"><Link to="/sony" class="model_link"><div class="content">sony</div></Link></div>
						<div class="le no"><Link to="/lg" class="model_link"><div class="content">LG</div></Link></div>
						<div class="le"><Link to="/samsung" class="model_link"><div class="content">samsung</div></Link></div>
					</div>
					</div>
					<div class="category3">Mobile<i class="fa fa-caret-down c0" aria-hidden="true"></i><div class="element">
						<div class="le no"><Link to="/sonyphone" class="model_link"><div class="content">sony</div></Link></div>
						<div class="le no"><Link to="/redmi" class="model_link"><div class="content">redmi</div></Link></div>
						<div class="le"><Link to="/samsungphone" class="model_link"><div class="content">samsung</div></Link></div>
					</div>
					</div>
					<div class="category4">Laptops<i class="fa fa-caret-down c0" aria-hidden="true"></i><div class="element">
						<div class="le no"><Link to="/acer" class="model_link"><div class="content">acer</div></Link></div>
						<div class="le no"><Link to="/lenovo" class="model_link"><div class="content">Lenovo</div></Link></div>
						<div class="le"><Link to="/hp" class="model_link"><div class="content">HP</div></Link></div>
					</div>
					</div>
				</div>
				<div class="offer">
				<button id="b1" name="decrement" onMouseUp={this.nxtimg}><i class="fa fa-angle-down" aria-hidden="true"></i></button>
				<button id="b2" name="increment" onMouseUp={this.nxtimg}><i class="fa fa-angle-down" aria-hidden="true"></i></button>
				<img src={img} id="offer1"/>
				</div>
				<footer>
					<span class="foot1">Designed by:Vishnu</span>
					<span class="foot2">Contact information:vishnusaravanan91@example.com</span>
				</footer>
			</div>
			);
	}
}