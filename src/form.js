 import React from 'react';
 import ReactDom from 'react-dom';
 import './font-awesome-4.7.0/css/font-awesome.css';
 import './css/style.css';
 import createaccount from './createaccount.js';
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 import store from './store.js';
 
export default class Form extends 	React.Component{
	 constructor(props)
	 {
		 super(props);
		 this.state={
			 profile:store.getState().profile,
			 username_err:"",
			 password_err:"",
			 valid:false,
			 createaccount:false
		 };
	 }
	 
	 pass=(e)=>
	 {
		e.preventDefault();
		let check=true;
		if(this.refs.username.value.length==0) 
		{	
			console.log(this.refs.username.value.length);
			console.log("username error");	
			check=false;
			this.setState({username_err:"username cant be empty"});
		}
		else{
			this.setState({username_err:""});
		}
		if(this.refs.password.value.length==0) 
		{	
			console.log(this.refs.password.value.length);
			console.log("password error");	
			check=false;
			this.setState({password_err:"password cant be empty"});
		}
		else{
			this.setState({password_err:""});
		}
		if(check==true)
		{
			console.log("password");
			let length = this.state.profile.length;
			for(let i=0;i<this.state.profile.length;i++){
				if(this.refs.username.value==this.state.profile[i].username){	
					this.setState({username_err:""});
						if(this.refs.password.value==this.state.profile[i].password){
							this.setState({password_err:""});
							store.dispatch({type:"login",text:this.refs.username.value});
							break;	
						}
						else{
							this.setState({password_err:"invalid password"});
						}	
				}
				else{
					this.setState({username_err:"invalid username"});
				}
			}
		}
	 }
	 
	 createaccount_active=()=>{
		 //this.setState({createaccount:true});
		 // this.props.valid_user("",true)
		 //console.log("createacount clicked");
		 store.dispatch({type:"create"});
	 }
	 toggle=()=>{
		 document.getElementById("password").type="text";
	 }
	 toggle2=()=>{
		 document.getElementById("password").type="password";
	 }
	 render()
	 {
		 return(
		 <body>	
			<div>
				<div id="signin">
					<p class="t1">SIGN IN</p>
					<form id="form">
							<div class="input1"><i class="fa fa-user c5" aria-hidden="true"></i><input type="text" ref="username" class="user" placeholder="username" /><span id="user_err">{this.state.username_err}</span></div>
							<div class="input2"><i class="fa fa-lock c5" aria-hidden="true"></i><input type="password" ref="password" id="password" placeholder="password" /><span id="pass_err">{this.state.password_err}</span>
								<span id="visibility" onMouseDown={this.toggle} onMouseUp={this.toggle2}><i class="fa fa-eye" aria-hidden="true"></i></span></div>
							<div id="check">< input id="box" type="checkbox" value=""/><span class="t2"> Remember me</span>
							<button id="submit" onClick={this.pass}>LOG IN</button></div>
					</form>
					
						<Router>
						<div id="link"><p class="t4"> Dont have account? </p> <Link to="/createaccount" onClick={this.createaccount_active} class="link1">Create account</Link></div>
						</Router>
				</div>
			</div>
		</body>
		);
	 }
 }
 
