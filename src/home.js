import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import './css/home.css';
import './font-awesome-4.7.0/css/font-awesome.css';
import data from './images.js';
import Form from './form.js';


export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			index:0,
			apperOffer: true,
			img:data.img[0],
			user:""
			};
	}
	ekart =(e)=>{
		e.preventDefault();
		console.log(this.state.img);
	}
	nxtimg =(e) =>{
		console.log(this.state.index);
		console.log("username");
		console.log("validuser");
		console.log(this.state.user);
		let temp=Number(this.state.index);
		if(e.target.name=="decrement"){
			//document.getElementById("offer1").style.animation = "fadein 0.5s";
			temp=(temp-1+5)%5;
			this.setState({
				index:temp,
				img:data.img[temp]
			});
		}
		if(e.target.name=="increment"){
			//document.getElementById("offer1").style.animation = "fadeout 0.5s";
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
	validate=(validuser)=>{
		if(validuser!=""){
		this.setState({user:validuser});
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
			console.log(temp);
		}

	logout=()=>{
		document.getElementById("navb2").style.display = "block";
		document.getElementById("navb3").style.display = "none";
		document.getElementById("user-access").style.display="none";
	}
	render()
	{
		const {apperOffer,img} = this.state;
		 return(
			<div id="root">
				<navbar>
					<div class="nav">
						<div class="nav1"><button  id="navb1" onClick={this.ekart}>ekart <i class="fa fa-shopping-cart c1" aria-hidden="true"></i></button></div>
						<div class="nav2"><input type="text" class="search" placeholder="Search products..." /><a href='' class="s1" ><i class="fa fa-search searchicon" aria-hidden="true"></i></a></div>
						
						<div class="nav3"><button  id="navb2" onClick={this.login}>Login<i class="fa fa-user c2" aria-hidden="true"></i></button>
							<div id="login-border"></div>
										<div id="login"><Form valid_user={this.validate}/></div>
										<div id="close" onClick={this.login_close}><i class="fa fa-times" aria-hidden="true"></i></div>
							</div>
							
							<button  id="navb3" onClick={this.user_access}>{this.state.user}<i class="fa fa-user c2" aria-hidden="true"></i></button>
							<div id="user-access" onClick={this.logout}>
								<button id="navb5">Logout<i class="fa fa-sign-out" aria-hidden="true"></i></button>
							</div>
						</div>
						<div id="nav4"><button id="navb4" onClick={this.ekart}>cart<i class="fa fa-cart-arrow-down c2" aria-hidden="true"></i></button></div>
				</navbar>
				<div class="category">
					<div class="category1">Electronics<i class="fa fa-caret-down " aria-hidden="true"></i><div class="element">
						<div class="le no"><div class="content">Trimmer</div></div>
						<div class="le no"><div class="content">watches</div></div>
						<div class="le"><div class="content">earphones</div></div>
					</div>
					</div>	
					<div class="category2">Tv&appliances<i class="fa fa-caret-down " aria-hidden="true"></i><div class="element">
					<div class="le no"><div class="content">sony</div></div>
						<div class="le no"><div class="content">LG</div></div>
						<div class="le"><div class="content">samsung</div></div>
					</div>
					</div>
					<div class="category3">Mobile<i class="fa fa-caret-down " aria-hidden="true"></i><div class="element">
						<div class="le no"><div class="content">sony</div></div>
						<div class="le no"><div class="content">azeus</div></div>
						<div class="le"><div class="content">nokia</div></div>
					</div>
					</div>
					<div class="category4">Laptops<i class="fa fa-caret-down " aria-hidden="true"></i><div class="element">
						<div class="le no"><div class="content">sony</div></div>
						<div class="le no"><div class="content">Lenovo</div></div>
						<div class="le"><div class="content">HP</div></div>
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