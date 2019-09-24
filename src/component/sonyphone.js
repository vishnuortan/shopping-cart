 import React from 'react';
 import ReactDom from 'react-dom';
 import '../css/trimmer.css';
 import '../font-awesome-4.7.0/css/font-awesome.css';
 import store  from '../store.js';
 
 export default class Sonyphone extends React.Component{
		constructor(props){
			super(props);
			this.state={
				list:store.getState().sonyphone,
				copy:store.getState().sonyphone
			}
		}
		cart=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"sonyphone"]});
		}
		loop=()=>{
			let state=[];
			for(let i=0;i<this.state.list.length;i++)
			{
			state.push(
			<div class="itemlist">
				<div class="wrapperlist">
					<div class="imagelist"><img  src={this.state.list[i].img} id="offer1"/></div>
					<button class="buttonlist2" name={this.state.list[i].item} onClick={this.cart}>Add to Cart</button>
					<div class="contentlist">
						<div class="itemname">{this.state.list[i].item}</div>
						<ul class="specs">
							<li class="specslist">{this.state.list[i].specs1}</li>
							<li class="specslist">{this.state.list[i].specs2}</li>
							<li class="specslist">{this.state.list[i].specs3}</li>
							<li class="specslist">{this.state.list[i].specs4}</li>
						</ul>
						<div class="prize">Cost:<span class="prizelist">{this.state.list[i].cost}₹</span></div>
					</div>
				</div>
			</div>);
			}
			return state;
			
		}
	    filter1=()=>{
			 let dis=document.getElementById("filter11").style.display;
			 if(dis=="none")
				document.getElementById("filter11").style.display="block";
			else
				document.getElementById("filter11").style.display="none";
		 }
		 
		 filter2=()=>{
			 let dis=document.getElementById("filter12").style.display;
			 if(dis=="none")
				document.getElementById("filter12").style.display="block";
			else
				document.getElementById("filter12").style.display="none";
		 }
		 
		 filter_search=()=>{
			 let temp=document.getElementsByName('radio');
			 let checked='';
			 for(let i=0;i<temp.length;i++){
				 if(temp[i].checked){
					 checked=temp[i].value;
				 }
			 }
			 console.log(checked);
			 
			 if(checked=='ascending'){
				 let state=[];
				 let index=[];
				 let content=[];
					for(let i=0;i<this.state.list.length;i++)
					{
						state.push(this.state.list[i].item);
						index.push(i);
					}
					
					for(let i=0;i<state.length;i++){
						for(let j=i+1;j<state.length;j++){
							if(state[i].localeCompare(state[j])==1){
								let temp2='';
								temp2=state[i];
								state[i]=state[j];
								state[j]=temp2;
								let temp3='';
								temp3=index[i];
								index[i]=index[j];
								index[j]=temp3;
							}
						}
						content.push(this.state.list[index[i]]);
					}
					this.setState({list:content});
			 }
			 
			 else if(checked=='descending'){
				 let state=[];
				 let index=[];
				 let content=[];
					for(let i=0;i<this.state.list.length;i++)
					{
						state.push(this.state.list[i].item);
						index.push(i);
					}
					
					for(let i=0;i<state.length;i++){
						for(let j=i+1;j<state.length;j++){
							if(state[i].localeCompare(state[j])==-1){
								let temp2='';
								temp2=state[i];
								state[i]=state[j];
								state[j]=temp2;
								let temp3='';
								temp3=index[i];
								index[i]=index[j];
								index[j]=temp3;
							}
						}
						content.push(this.state.list[index[i]]);
					}
					this.setState({list:content});
			 }
			 
			 else if(checked=="hightolow"){
				 let state=[];
				 let index=[];
				 let content=[];
					for(let i=0;i<this.state.list.length;i++)
					{
						state.push(this.state.list[i].cost);
						index.push(i);
					}
					console.log(state);
					for(let i=0;i<state.length;i++){
						for(let j=i+1;j<state.length;j++){
							if(Number(state[i])<Number(state[j])){
								let temp2='';
								temp2=state[i];
								state[i]=state[j];
								state[j]=temp2;
								let temp3='';
								temp3=index[i];
								index[i]=index[j];
								index[j]=temp3;
							}
						}
						content.push(this.state.list[index[i]]);
					}
					this.setState({list:content});
					console.log(index);

			 }
			 else if(checked=="lowtohigh"){
				 let state=[];
				 let index=[];
				 let content=[];
					for(let i=0;i<this.state.list.length;i++)
					{
						state.push(this.state.list[i].cost);
						index.push(i);
					}
					console.log(state);
					for(let i=0;i<state.length;i++){
						for(let j=i+1;j<state.length;j++){
							if(Number(state[i])>Number(state[j])){
								let temp2='';
								temp2=state[i];
								state[i]=state[j];
								state[j]=temp2;
								let temp3='';
								temp3=index[i];
								index[i]=index[j];
								index[j]=temp3;
							}
						}
						content.push(this.state.list[index[i]]);
					}
					this.setState({list:content});
					console.log(index);
					console.log(content);
			 }
		 }
	 render(){
				
		 
		return(
				<div id="root_trimm">
				
				<div id="holder">	
					<div id="filter" ><i class="fa fa-filter c6" aria-hidden="true"> Filter</i></div>
						<div id="wrapper">
						<div class="fil" >
							<div onClick={this.filter1}>By name <i class="fa fa-caret-down " aria-hidden="true"></i></div>
								<div id="filter11">
									<div class="fil_content">< input class="radio"  type="radio" name="radio" value="ascending"/>ascending</div>
									<div class="fil_content">< input class="radio" type="radio" name="radio" value="descending"/>descending</div>
								</div>
						</div>
						<div  class="fil" >
							<div onClick={this.filter2}>By price <i class="fa fa-caret-down " aria-hidden="true"></i></div>
							<div id="filter12">
									<div class="fil_content">< input class="radio" name="radio" type="radio" value="hightolow"/>high to low</div>
									<div class="fil_content">< input class="radio" name="radio" type="radio" value="lowtohigh"/>low to high</div>
								</div>
						</div>
					</div>
					
				</div>
				
					<button id="filter_button" onClick={this.filter_search}><i class="fa fa-search c6" aria-hidden="true"></i>search</button>
				
						<div id="item">
							{this.loop()}
						</div>
				</div>
				);
	 }
 }