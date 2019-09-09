 import React from 'react';
 import ReactDom from 'react-dom';
 import './font-awesome-4.7.0/css/font-awesome.css';
 import './css/style.css';
 import login_img from './images/login-img.jpg';
 export default class Form extends 	React.Component{
	 constructor(props)
	 {
		 super(props);
		 this.state={
			 username:"vishnu",
			 password:"vishnu123",
			 username_err:"",
			 password_err:"",
			 valid:false
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
		if(this.refs.password.value.length==0) 
		{	
			console.log(this.refs.password.value.length);
			console.log("password error");	
			check=false;
			this.setState({password_err:"password cant be empty"});
		}
		if(check==true)
		{
			console.log(this.refs.username.value);
			console.log(this.refs.password.value);
			let validate=true;
			if(this.refs.username.value==this.state.username){	
				this.setState({username_err:""});
			}
			if(this.refs.password.value==this.state.password){
				this.setState({password_err:""});
			}
			if(this.refs.username.value!=this.state.username){	
				validate=false;
				this.setState({username_err:"invalid username",valid:false});
			}
			if(this.refs.password.value!=this.state.password){	
				validate=false;
				this.setState({password_err:"invalid password",valid:false});
			}
			if(validate==true){
				console.log("user entered");	
				this.setState({username_err:"",password_err:"",valid:true});
				this.sendData();
			}
		}
	 }
	 sendData=()=>{
		 let username = this.state.username;
		 this.props.valid_user(username);
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
							<div class="input2"><i class="fa fa-lock c5" aria-hidden="true"></i><input type="password" ref="password" class="user" placeholder="password" /><span id="pass_err">{this.state.password_err}</span>
								</div>
							<div id="check">< input id="box" type="checkbox" value=""/><span class="t2"> Remember me</span>
							<button id="submit" onClick={this.pass}>LOG IN</button></div>
					</form>
					<div id="link"><p class="t4"> Dont have account? </p> <a href="#" class="t3"> Create account </a></div>
				</div>
			</div>
		</body>
		);
	 }
 }