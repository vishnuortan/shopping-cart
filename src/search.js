import React from "react";
import ReactDom from "react-dom";
import store from './store.js';
export default class Searchitem extends React.Component{
	constructor(props){
		super(props);
		this.state={
			search:store.getState().searchresult,
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
		}
	}
	cart=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"trimmer"]});
		}
	cart2=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"watches"]});
		}
	cart3=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"earphones"]});
		}
	cart4=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"sony"]});
		}
	cart5=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"samsung"]});
		}
	cart6=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"lg"]});
		}
	cart7=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"redmi"]});
		}
	cart8=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"sonyphone"]});
		}
	cart9=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"samsungphone"]});
		}
	cart10=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"lenovo"]});
		}
	cart11=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"hp"]});
		}
	cart12=(e)=>{
			store.dispatch({type:"addtocart",text:[e.target.name,"acer"]});
		}
	search=()=>{
		console.log("search");
		let value=this.state.search;
					for(let i=0;i<this.state.list.length;i++)
					{
						if(value==this.state.list[i].item){
						return(
							
								<div class="wrapperlist">
								<div class="imagelist21"><img  src={this.state.list[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list[i].item} onClick={this.cart}>Add to Cart</button>
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
							);
						}
					}
					for(let i=0;i<this.state.list1.length;i++)
					{
						if(value==this.state.list1[i].item){
						return(
							
								<div class="wrapperlist">
								<div class="imagelist21"><img  src={this.state.list1[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list1[i].item} onClick={this.cart2}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list1[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list1[i].specs1}</li>
											<li class="specslist">{this.state.list1[i].specs2}</li>
											<li class="specslist">{this.state.list1[i].specs3}</li>
											<li class="specslist">{this.state.list1[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list1[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					for(let i=0;i<this.state.list2.length;i++)
					{
						if(value==this.state.list2[i].item){
						return(
							
								<div class="wrapperlist">
								<div ><img class="imagelist21" src={this.state.list2[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list2[i].item} onClick={this.cart3}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list2[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list2[i].specs1}</li>
											<li class="specslist">{this.state.list2[i].specs2}</li>
											<li class="specslist">{this.state.list2[i].specs3}</li>
											<li class="specslist">{this.state.list2[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list2[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					for(let i=0;i<this.state.list3.length;i++)
					{
						if(value==this.state.list3[i].item){
						return(
							
								<div class="wrapperlist">
								<div class="imagelist22"><img  src={this.state.list3[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list3[i].item} onClick={this.cart4}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list3[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list3[i].specs1}</li>
											<li class="specslist">{this.state.list3[i].specs2}</li>
											<li class="specslist">{this.state.list3[i].specs3}</li>
											<li class="specslist">{this.state.list3[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list3[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					for(let i=0;i<this.state.list4.length;i++)
					{
						if(value==this.state.list4[i].item){
						return(
							
								<div class="wrapperlist">
								<div class="imagelist22"><img  src={this.state.list4[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list4[i].item} onClick={this.cart5}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list4[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list4[i].specs1}</li>
											<li class="specslist">{this.state.list4[i].specs2}</li>
											<li class="specslist">{this.state.list4[i].specs3}</li>
											<li class="specslist">{this.state.list4[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list4[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					for(let i=0;i<this.state.list5.length;i++)
					{
						if(value==this.state.list5[i].item){
						return(
							
								<div class="wrapperlist">
								<div class="imagelist22"><img  src={this.state.list5[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list5[i].item} onClick={this.cart6}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list5[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list5[i].specs1}</li>
											<li class="specslist">{this.state.list5[i].specs2}</li>
											<li class="specslist">{this.state.list5[i].specs3}</li>
											<li class="specslist">{this.state.list5[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list5[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					for(let i=0;i<this.state.list6.length;i++)
					{
						if(value==this.state.list6[i].item){
						return(
							
								<div class="wrapperlist">
								<div class="imagelist21"><img  src={this.state.list6[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list6[i].item} onClick={this.cart7}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list6[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list6[i].specs1}</li>
											<li class="specslist">{this.state.list6[i].specs2}</li>
											<li class="specslist">{this.state.list6[i].specs3}</li>
											<li class="specslist">{this.state.list6[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list6[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					for(let i=0;i<this.state.list7.length;i++)
					{
						if(value==this.state.list7[i].item){
						return(
							
								<div class="wrapperlist">
								<div class="imagelist21"><img  src={this.state.list7[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list7[i].item} onClick={this.cart8}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list7[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list7[i].specs1}</li>
											<li class="specslist">{this.state.list7[i].specs2}</li>
											<li class="specslist">{this.state.list7[i].specs3}</li>
											<li class="specslist">{this.state.list7[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list7[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					for(let i=0;i<this.state.list8.length;i++)
					{
						if(value==this.state.list8[i].item){
						return(
							
								<div class="wrapperlist">
								<div class="imagelist21"><img  src={this.state.list8[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list8[i].item} onClick={this.cart9}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list8[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list8[i].specs1}</li>
											<li class="specslist">{this.state.list8[i].specs2}</li>
											<li class="specslist">{this.state.list8[i].specs3}</li>
											<li class="specslist">{this.state.list8[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list8[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					for(let i=0;i<this.state.list9.length;i++)
					{
						if(value==this.state.list9[i].item){
						return(
						
								<div class="wrapperlist">
								<div class="imagelist22"><img  src={this.state.list9[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list9[i].item} onClick={this.cart10}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list9[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list9[i].specs1}</li>
											<li class="specslist">{this.state.list9[i].specs2}</li>
											<li class="specslist">{this.state.list9[i].specs3}</li>
											<li class="specslist">{this.state.list9[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list9[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					
					for(let i=0;i<this.state.list10.length;i++)
					{
						if(value==this.state.list10[i].item){
						return(
								<div class="wrapperlist">
								<div class="imagelist22"><img  src={this.state.list10[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list10[i].item} onClick={this.cart11}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list10[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list10[i].specs1}</li>
											<li class="specslist">{this.state.list10[i].specs2}</li>
											<li class="specslist">{this.state.list10[i].specs3}</li>
											<li class="specslist">{this.state.list10[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list10[i].cost}₹</span></div>
								</div>
								</div>);
						}
					}
					for(let i=0;i<this.state.list11.length;i++)
					{
						if(value==this.state.list11[i].item){
						return(
								<div class="wrapperlist">
								<div class="imagelist22"><img  src={this.state.list11[i].img} id="offer1"/></div>
									<button class="buttonlist" name={this.state.list11[i].item} onClick={this.cart12}>Add to Cart</button>
										<div class="contentlist">
										<div class="itemname">{this.state.list11[i].item}</div>
										<ul class="specs">
											<li class="specslist">{this.state.list11[i].specs1}</li>
											<li class="specslist">{this.state.list11[i].specs2}</li>
											<li class="specslist">{this.state.list11[i].specs3}</li>
											<li class="specslist">{this.state.list11[i].specs4}</li>
										</ul>
										<div class="prize">Cost:<span class="prizelist">{this.state.list11[i].cost}₹</span></div>
								</div>
								</div>
							);
						}
					}
					
				return(<div class="nosearch"> no result found</div>);
	}
	render(){
		return(
			<div>{this.search()}</div>
			);
	}
}	