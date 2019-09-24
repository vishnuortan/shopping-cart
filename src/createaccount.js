 import React from 'react';
 import ReactDom from 'react-dom';
 import './font-awesome-4.7.0/css/font-awesome.css';
 import './css/createaccount.css';
  import store from './store.js';

 import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 
  class Createaccount extends 	React.Component{
	 constructor(props)
	 {
		 super(props);
		 this.state={
			 profile:store.getState().profile,
			 pass_check:"",
			 username_err:"",
			 confirm_err:"",
			 email_err:""
		 };
	 }
	 create=(e)=>{
		 if((this.state.username_err=="")&&(this.state.confirm_err=="")&&(this.state.email_err==""))
		 {
			 if((this.refs.username.value!="")&&(this.refs.password.value!="")&&(this.refs.email.value!="")){
			 store.dispatch({type:"home"});
			 let temp=[this.refs.username.value,this.refs.password.value,this.refs.email.value];
			 store.dispatch({type:"add",text:temp});
			 } 
		 }
		 else{
			  e.preventDefault();
		 }
		
	 }
	 
	 user=()=>{
		 if(this.refs.username.value.length>3){
			for(let i=0;i<this.state.profile.length;i++){
				if(this.refs.username.value==this.state.profile[i].username){this.setState({username_err:"already exists"});break;}
				else{this.setState({username_err:""});}
			}
		 }
		 else{
			 this.setState({username_err:"minimum 4 chararcter"});
		 }
	 }
	email=()=>{
			 let email=/^([A-Za-z0-9_\-\.])+\@([gmail|hotmail])+\.(com)$/
			  let length = this.state.profile.length;
			  if(!this.refs.email.value.match(email)){this.setState({email_err:"invalid email"});}
			  else{
				  this.setState({email_err:""});
				for(let i=0;i<this.state.profile.length;i++){
					if(this.refs.email.value==this.state.profile[i].email){this.setState({email_err:"already register with this email"});break;}
				}
			  }
	}
	 password_check=()=>{
		document.getElementById("pass_check").style.display="inline"; 
		let str=this.refs.password.value;
		let upperCaseLetters = /[A-Z]/g;
		let numbers = /[0-9]/g;
		let special=/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		 console.log(str);
		if(str.length<8){
			this.setState({pass_check:"weak",});
			document.getElementById("pass_check").style.color="red"; 
		}
		else{
			let c1=false;
			let c2=false;
			let c3=false;
			if(str.match(upperCaseLetters)){console.log("upper");c1=true}
			if(str.match(numbers)){console.log("upper");c2=true}
			if(str.match(special)){console.log("upper");c3=true}
			
			if((c1)&&(c2)&&(c3))  {this.setState({pass_check:"stronger"});document.getElementById("pass_check").style.color="green"; }
			else if((c1)&&((c2)||(c3))) {this.setState({pass_check:"strong"});document.getElementById("pass_check").style.color="Chartreuse"; }
			else if(((c1)||(c2))&&(c3))  {this.setState({pass_check:"strong"});document.getElementById("pass_check").style.color="Chartreuse";}
			else if((c1)||(c2)||(c3))  {this.setState({pass_check:"light"});document.getElementById("pass_check").style.color="orange";}
			
		}
		 
	 }
	 
	 confirm_check=()=>{
		 	 if(this.refs.password.value!=this.refs.confirm_password.value){this.setState({confirm_err:"password do not match"});}
			 else{this.setState({confirm_err:""});}
	 }
	 
	 password_holder=()=>{
		 document.getElementById("pass_check").style.display="none";
		 if((this.state.pass_check=="strong")||(this.state.pass_check=="stronger")){
			 this.setState({password_err:""});
			 }
			 
		 else{
			 this.setState({password_err:"choose strong password"});
			 }
	 }
	 
	 
	 render(){

		 return(
			<div id="creation">
					<p class="t1">Create account</p>
					<form id="form2">
					<br/><br/>
							<div class="input3"><i class="fa fa-user c5" aria-hidden="true"></i><input type="text" ref="username" class="user2" placeholder="username" onBlur={this.user}/><span id="user_err">{this.state.username_err}</span></div>
							
							<div class="input3"><i class="fa fa-lock c5" aria-hidden="true"></i><input type="password" ref="password" class="user2" placeholder="password" onBlur={this.password_holder} onChange={this.password_check}/><span id="pass_check">{this.state.pass_check}</span><span id="pass2_err">{this.state.password_err}</span></div>
								
							<div class="input3"><i class="fa fa-key c5" aria-hidden="true"></i><input type="password" ref="confirm_password" class="user2" placeholder="confirm password" onBlur={this.confirm_check}/><span id="confirm_err">{this.state.confirm_err}</span></div>
					
							<div class="input3"><i class="fa fa-envelope c5" aria-hidden="true"></i><input type="text" ref="email" class="user2" placeholder="email" onBlur={this.email} /><span id="email_err">{this.state.email_err}</span></div>
							
							<Link to="/" id="link3" onClick={this.create}><button id="submit2" >Create</button></Link>
					</form>
					
			</div>
	 );
	 }
 }
 
 

 
 export default Createaccount;
	 