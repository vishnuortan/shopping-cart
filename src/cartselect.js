import React from "react";
import ReactDom from "react-dom";
import store from './store.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 import './font-awesome-4.7.0/css/font-awesome.css';
 
export default class Cartselect extends React.Component{
	constructor(props){
		super(props);
		this.state={
			cartitem:store.getState().cart,
			list:store.getState().trimmer,
			list1:store.getState().watches,
			list2:store.getState().earphones,
			list3:store.getState().sony,
			list4:store.getState().samsung,
			list5:store.getState().lg,
			list6:store.getState().redmi,
			list7:store.getState().sonyphone,
			list8:store.getState().samsungphone,
			list9:store.getState().lenovo,
			list10:store.getState().hp,
			list11:store.getState().acer,
			quantity:[],
			prize:[],
			total:0,
			repeat:1
		}
	}
	increment=(index)=>{
		let total=Number(this.state.total)+Number(this.state.prize[index]);
		console.log(total);
		this.setState({total:total});
		let temp=this.state.quantity;
		temp[index]=temp[index]+1;
		console.log(temp);
		this.setState({quantity:temp});
		console.log(this.state.quantity);
	}
	decrement=(index)=>{
		let total=Number(this.state.total)-Number(this.state.prize[index]);
		console.log(total);
		this.setState({total:total});
		let temp=this.state.quantity;
		if(temp[index]>0){
				temp[index]=temp[index]-1;
			console.log(temp[index]);
		this.setState({quantity:temp});
		}
		console.log(this.state.quantity);
	}
	totalamount=(prize)=>{
		if(this.state.quantity.length > this.state.prize.length){
		this.state.prize.push(Number(prize));
		}
	}
	totalcost=()=>{
		let totalcost=0;
		if(this.state.total==0){
		for(let i=0;i<this.state.prize.length;i++){
				totalcost=totalcost+Number(this.state.prize[i]);
			}
			this.setState({total:totalcost});
			console.log(totalcost);
		}
	}
	
	cartlist=()=>{
			let state=[];
			let totalcost=0;
			for(let j=0;j<this.state.cartitem.length;j=j+3)
			{
				
				if(this.state.cartitem[j+1]=="trimmer"){
					for(let i=0;i<this.state.list.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list[i].item){
							this.totalamount(this.state.list[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage"><img  src={this.state.list[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent">
									<div class="cartname">{this.state.list[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="watches"){
					for(let i=0;i<this.state.list1.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list1[i].item){
							console.log("enter"+this.state.cartitem[j]);
							this.totalamount(this.state.list1[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage"><img  src={this.state.list1[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent">
									<div class="cartname">{this.state.list1[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list1[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="earphones"){
					for(let i=0;i<this.state.list2.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list2[i].item){
							this.totalamount(this.state.list2[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage"><img  src={this.state.list2[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent">
									<div class="cartname">{this.state.list2[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list2[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="sony"){
					for(let i=0;i<this.state.list3.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list3[i].item){
							this.totalamount(this.state.list3[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage2"><img  src={this.state.list3[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent2">
									<div class="cartname">{this.state.list3[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list3[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="samsung"){
					for(let i=0;i<this.state.list4.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list4[i].item){
							this.totalamount(this.state.list4[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage2"><img  src={this.state.list4[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent2">
									<div class="cartname">{this.state.list4[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list4[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="lg"){
					for(let i=0;i<this.state.list5.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list5[i].item){
							this.totalamount(this.state.list5[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage2"><img  src={this.state.list5[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent2">
									<div class="cartname">{this.state.list5[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list5[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="redmi"){
					for(let i=0;i<this.state.list6.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list6[i].item){
							this.totalamount(this.state.list6[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage"><img  src={this.state.list6[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent">
									<div class="cartname">{this.state.list6[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list6[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="sonyphone"){
					for(let i=0;i<this.state.list7.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list7[i].item){
							this.totalamount(this.state.list7[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage"><img  src={this.state.list7[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent">
									<div class="cartname">{this.state.list7[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list7[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="samsungphone"){
					for(let i=0;i<this.state.list8.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list8[i].item){
							this.totalamount(this.state.list8[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage"><img  src={this.state.list8[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent">
									<div class="cartname">{this.state.list6[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list6[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="lenovo"){
					for(let i=0;i<this.state.list9.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list9[i].item){
							this.totalamount(this.state.list9[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage2"><img  src={this.state.list9[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent2">
									<div class="cartname">{this.state.list9[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list9[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="hp"){
					for(let i=0;i<this.state.list10.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list10[i].item){
							this.totalamount(this.state.list10[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage2"><img  src={this.state.list10[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent2">
									<div class="cartname">{this.state.list10[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list10[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
				else if(this.state.cartitem[j+1]=="acer"){
					for(let i=0;i<this.state.list11.length;i++)
					{
						if(this.state.cartitem[j]==this.state.list11[i].item){
							this.totalamount(this.state.list11[i].cost);
						state.push(
						<div class="wrappercart">
							<div class="cartlist">
								<div class="itemwrapper">
									<div class="cartimage2"><img  src={this.state.list11[i].img} id="offer1"/></div>
									<div class="cartadjust"><button class="adjust" name="increment" onClick={()=>this.increment(j/3)}>+</button>
									<span class="number">{this.state.quantity[j/3]}</span>
									<button class="adjust" name="decrement" onClick={()=>this.decrement(j/3)}>-</button></div>
								</div>
								<div class="cartcontent2">
									<div class="cartname">{this.state.list11[i].item}</div>
									<div class="cartprize">Cost:<span class="prizelist">{this.state.list11[i].cost}₹</span></div>
								</div>
							</div>
						</div>
						);
						}
					}
				}
			
			}
			//store.dispatch({type:"additem",text:temp});
			return state;
	}
	call=()=>{
		if(this.state.quantity.length==0){
		for(let i=2;i<this.state.cartitem.length;i=i+3){
		this.state.quantity.push(Number(this.state.cartitem[i]));
		}
		}
	}
	 render(){
		 this.call();
	 return(
					<div id="cartwrapper" >
					<h2 id="mycart">My Cart</h2>
					<div id="selectitem">
						{ this.cartlist()}
					</div>
					<div id="sum">
						{  this.totalcost()}
						<div id="total">Total amount:<span id="totalamount">{this.state.total}₹</span></div>
					</div>
					</div>
					);
}
}
