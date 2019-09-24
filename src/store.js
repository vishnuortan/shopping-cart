import React from 'react';
import ReactDom from 'react-dom';
import { combineReducers, createStore } from 'redux';
import  data  from './images.js';


const links={
	home:true,create:false
};

const account=[{username:'vishnu',password:'vishnu123',email:'vishnu@gmail.com'},{username:'',password:'',email:''}];


const validate=(state={login:false,user:""},action)=>{
	switch(action.type)
	{
		case "invalid_login":
			return state={login:false,user:""};
		case "login":
			return state={login:true,user:action.text};
		default:
			return state;
	}
}

const navlink = (state=links,action)=>{
    switch(action.type)
	{
		case "create":
			return state={home:false,create:true};
		case "home":
			return state={home:true,create:false};
		default:
			return state;
	}
}
const tab11=[{model:'philips',item:'philips 9101',cost:'1000',img:data.img[5],specs1:'stainless steel',specs2:'1000mAh battery',specs3:'0.5 to 10mm range',specs4:'For Body Grooming, Beard & Moustache'},

{model:'philips',item:'philips b186',cost:'1500',img:data.img[6],specs1:'stainless steel',specs2:'1300mAh battery',specs3:'0.5 to 10mm range',specs4:'For Body Grooming, Beard & Moustache'},

{model:'philips',item:'philips ct03',cost:'1900',img:data.img[7],specs1:'Titanium Coated',specs2:'1000mAh battery',specs3:'0.5 to 12mm range',specs4:'For Body Grooming, Beard & Moustache'},

{model:'philips',item:'philips zc1e',cost:'850',img:data.img[8],specs1:'plastic',specs2:'1000mAh battery',specs3:'0.5 to 10mm range',specs4:'For Body Grooming, Beard & Moustache'},

{model:'wahl',item:'wahlxt b61',cost:'1500',img:data.img[9],specs1:'Titanium Coated',specs2:'1200mAh battery',specs3:'0.5 to 11mm range',specs4:'For Body Grooming, Beard & Moustache'},

{model:'wahl',item:'wahlxt 101',cost:'1600',img:data.img[10],specs1:'Titanium Coated',specs2:'1300mAh battery',specs3:'0.5 to 12mm range',specs4:'For Body Grooming, Beard & Moustache'},

{model:'wahl',item:'wahlx k9',cost:'800',img:data.img[11],specs1:'plastic',specs2:'1000mAh battery',specs3:'0.5 to 10mm range',specs4:'For Body Grooming, Beard & Moustache'},

{model:'braun',item:'braun gt1',cost:'950',img:data.img[12],specs1:'stainless steel',specs2:'1000mAh battery',specs3:'0.5 to 10mm range',specs4:'For Body Grooming, Beard & Moustache'},

{model:'braun',item:'braun l6n',cost:'2000',img:data.img[13],specs1:'Titanium Coated',specs2:'1300mAh battery',specs3:'0.5 to 12mm range',specs4:'For Body Grooming, Beard & Moustache'}]

const trimmer = (state=tab11,action)=>{
	switch(action.type)
			{
				case "trimmer":
					return state;
			
			default:
					return state;
			}
}
const tab12=[{model:'fossil',item:'fossil b1',cost:'4500',img:data.img[17],specs1:'leather wear',specs2:'stainless steel body',specs3:'12hr format',specs4:'water proof'},
{model:'fossil',item:'fossil a6',cost:'4000',img:data.img[18],specs1:'leather wear',specs2:'stainless steel body',specs3:'24hr format',specs4:'smudge proof'},
{model:'titan',item:'titan c0',cost:'5200',img:data.img[15],specs1:'metallic wear',specs2:'stainless steel body',specs3:'12hr format',specs4:'water proof'},
{model:'titan',item:'titan z1',cost:'3000',img:data.img[17],specs1:'metallic wear',specs2:'stainless steel body',specs3:'12hr format',specs4:'water proof'},
{model:'titan',item:'titan u8',cost:'2000',img:data.img[16],specs1:'leather wear girls',specs2:'stainless steel body',specs3:'12hr format',specs4:'water proof'}]

const watches = (state=tab12,action)=>{
	switch(action.type)
			{
				case "watches":
					return state;
			
			default:
					return state;
			}
}

const tab13=[{model:'skullcandy',item:'skullcandy a2',cost:'1000',img:data.img[19],specs1:'in-ear model',specs2:'>85db sound level',specs3:'noise cancellation'},
{model:'skullcandy',item:'skullcandy b2',cost:'500',img:data.img[20],specs1:'in-ear model',specs2:'>85db sound level',specs3:'color blue'},
{model:'sony',item:'sony b7',cost:'1500',img:data.img[21],specs1:'in-ear model',specs2:'>85db sound level',specs3:'noise cancellation'},
{model:'sony',item:'sony cz',cost:'700',img:data.img[22],specs1:'in-ear model',specs2:'>85db sound level',specs3:'color red'}]

const earphones = (state=tab13,action)=>{
	switch(action.type)
			{
				case "earphones":
					return state;
			
			default:
					return state;
			}
}

const tab21=[{model:'lg',item:'lg cv21',cost:'10000',img:data.img[23],specs1:'smart tv',specs2:'1920x1080',specs3:'32 Inches',specs4:'usb,wifi enable'},
{model:'lg',item:'lg bg91',cost:'12000',img:data.img[24],specs1:'UHD smart tv',specs2:'1920x1080',specs3:'32 Inches',specs4:'usb,wifi enable'},
{model:'lg',item:'lg cl32',cost:'13000',img:data.img[25],specs1:'UHD smart tv',specs2:'4K resoultion',specs3:'32 Inches',specs4:'usb,wifi enable'}]

const lg = (state=tab21,action)=>{
	switch(action.type)
			{
				case "lg":
					return state;
			
			default:
					return state;
			}
}

const tab22=[{model:'samsung',item:'samsung cv21',cost:'10000',img:data.img[26],specs1:'smart tv',specs2:'1920x1080',specs3:'32 Inches',specs4:'usb,wifi enable'},
{model:'samsung',item:'samsung bl32',cost:'15000',img:data.img[27],specs1:'curved tv',specs2:'4K resoultion',specs3:'32 Inches',specs4:'usb,wifi enable'},
{model:'samsung',item:'samsung cz91',cost:'9000',img:data.img[28],specs1:'smart tv',specs2:'1920x1080',specs3:'32 Inches',specs4:'usb,wifi enable'}]

const samsung = (state=tab22,action)=>{
	switch(action.type)
			{
				case "samsung":
					return state;
			
			default:
					return state;
			}
}
const tab23=[{model:'sony',item:'sony bl',cost:'11000',img:data.img[29],specs1:'smart HD tv',specs2:'1920x1080',specs3:'32 Inches',specs4:'usb,wifi enable'},
{model:'sony',item:'sony czl2',cost:'13000',img:data.img[30],specs1:'smart FHD tv',specs2:'4K resoultion',specs3:'32 Inches',specs4:'usb,wifi enable'},
{model:'sony',item:'sony lb2',cost:'10000',img:data.img[31],specs1:'smart HD tv',specs2:'1920x1080',specs3:'32 Inches',specs4:'usb,wifi enable'}]

const sony = (state=tab23,action)=>{
	switch(action.type)
			{
				case "sony":
					return state;
			
			default:
					return state;
			}
}

const tab31=[{model:'redmi',item:'redmi k20',cost:'25000',img:data.img[32],specs1:'1920x1080',specs2:'25mp popup selfie camera',specs3:'2.4Ghz processor',specs4:'4200mAH battery'},
{model:'redmi',item:'redmi note7',cost:'15000',img:data.img[33],specs1:'1920x1080',specs2:'15mp & 40mp  camera',specs3:'2.1Ghz processor',specs4:'4000mAH battery'},
{model:'redmi',item:'redmi y3',cost:'12000',img:data.img[34],specs1:'1920x1080',specs2:'15mp & 20mp camera',specs3:'2.0Ghz processor',specs4:'4500mAH battery'}]

const redmi = (state=tab31,action)=>{
	switch(action.type)
			{
				case "redmi":
					return state;
			
			default:
					return state;
			}
}

const tab32=[{model:'samsung',item:'samsung a70',cost:'15000',img:data.img[35],specs1:'1920x1080',specs2:'15mp & 20mp camera',specs3:'2.0Ghz processor',specs4:'4200mAH battery'},
{model:'samsung',item:'samsung s10',cost:'10000',img:data.img[36],specs1:'4K HD screen',specs2:'35mp & 40mp  camera',specs3:'2.7Ghz processor',specs4:'4500mAH battery'},
{model:'samsung',item:'samsung m20',cost:'18000',img:data.img[37],specs1:'1920x1080',specs2:'20mp & 28mp camera',specs3:'2.0Ghz processor',specs4:'4500mAH battery'}]

const samsungphone = (state=tab32,action)=>{
	switch(action.type)
			{
				case "samsungphone":
					return state;
			
			default:
					return state;
			}
}

const tab33=[{model:'sony',item:'sony xperia z5',cost:'25000',img:data.img[38],specs1:'1920x1080',specs2:'35mp & 40mp  camera',specs3:'2.4Ghz processor',specs4:'4200mAH battery'},
{model:'sony',item:'sony xperia a2',cost:'15000',img:data.img[39],specs1:'1920x1080',specs2:'10mp & 28mp camera',specs3:'2.1Ghz processor',specs4:'4000mAH battery'},
{model:'sony',item:'sony xperia y2',cost:'18000',img:data.img[40],specs1:'1920x1080',specs2:'20mp & 28mp camera',specs3:'2.0Ghz processor',specs4:'4000mAH battery'}]

const sonyphone = (state=tab33,action)=>{
	switch(action.type)
			{
				case "sonyphone":
					return state;
			
			default:
					return state;
			}
}

const tab41=[{model:'acer',item:'acer aspire',cost:'45000',img:data.img[41],specs1:'1920x1080',specs2:'1020 nvidia graphics',specs3:'2.4Ghz processor',specs4:'1TB harddisk 8GB RAM'},
{model:'acer',item:'acer predator a1',cost:'75000',img:data.img[42],specs1:'4K resoultion',specs2:'1080 nvidia graphics 128GB SSD',specs3:'2.8Ghz processor',specs4:'1TB harddisk 16GB RAM'},
{model:'acer',item:'acer predator b2',cost:'80000',img:data.img[43],specs1:'4K resoultion',specs2:'1080 nvidia graphics 128GB SSD',specs3:'2.9Ghz processor',specs4:'1TB harddisk 16GB RAM'}]

const acer = (state=tab41,action)=>{
	switch(action.type)
			{
				case "acer":
					return state;
			
			default:
					return state;
			}
}

const tab42=[{model:'hp',item:'hp notebookpro',cost:'45000',img:data.img[44],specs1:'1920x1080',specs2:'920 nvidia graphics',specs3:'2.4Ghz processor',specs4:'1TB harddisk 8GB RAM'},
{model:'hp',item:'hp omen',cost:'55000',img:data.img[45],specs1:'1920x1080',specs2:'1080 nvidia graphics 128GB SSD',specs3:'2.5Ghz processor',specs4:'1TB harddisk 16GB RAM'},
{model:'hp',item:'hp pavilion',cost:'40000',img:data.img[46],specs1:'1920x1080',specs2:'980 nvidia graphics',specs3:'2.4Ghz processor',specs4:'1TB harddisk 8GB RAM'}]

const hp = (state=tab42,action)=>{
	switch(action.type)
			{
				case "acer":
					return state;
			
			default:
					return state;
			}
}
const tab43=[{model:'lenovo',item:'lenovo G70',cost:'45000',img:data.img[47],specs1:'1920x1080',specs2:'1020 nvidia graphics',specs3:'2.4Ghz processor',specs4:'1TB harddisk 8GB RAM'},
{model:'lenovo',item:'lenovo Legion',cost:'85000',img:data.img[48],specs1:'4K resoultion',specs2:'1080 nvidia graphics 128GB SSD',specs3:'2.8Ghz processor',specs4:'1TB harddisk 16GB RAM'},
{model:'lenovo',item:'lenovo yoga',cost:'58000',img:data.img[49],specs1:'4K resoultion',specs2:'1020 nvidia graphics',specs3:'2.4Ghz processor',specs4:'1TB harddisk 16GB RAM'}]

const lenovo = (state=tab43,action)=>{
	switch(action.type)
			{
				case "lenovo":
					return state;
			
			default:
					return state;
			}
}

const profile = (state=account,action)=>{
			switch(action.type)
			{
				case "add":
							{
							 let length=state.length;
							 for(let i=0;i<length;i++)
							 {
								 if(state[i].username=="")
								 {
									 state[i].username=action.text[0];
									 state[i].password=action.text[1];
									 state[i].email=action.text[2];
								 }
								 console.log(state);
							 }
							 return state;
							}
				default:
					return state;
			}
}

const cart = (state=[],action)=>{
			switch(action.type)
			{
				case "addtocart":
							{
							 let length=state.length;
							 if(length==0)
							 {
								 state.push(action.text[0]);
								 state.push(action.text[1]);
								 state.push(1);
							 }
							 else{
								for(let i=0;i<length;i=i+3)
								{
									if(state[i]==action.text)
									{
										return state;
									}
									else{
										state.push(action.text[0]);
										state.push(action.text[1]);
										state.push(1);
										break;
									}
								}
							 }
							 console.log(state);
							}
				default:
					return state;
			}
}
const searchitem = (state=['philips 9101','philips b186','philips ct03','philips zc1e','wahlxt b61','wahlxt 101','wahlx k9','braun gt1','braun l6n','fossil b1','fossil a6','titan c0','titan z1','titan u8','skullcandy a2','skullcandy b2','sony b7','sony cz','lg cv21','lg bg91','lg cl32','samsung cv21','samsung bl32','samsung cz91','sony bl','sony czl2','sony lb2','redmi k20','redmi note7','redmi y3','samsung a70','samsung s10','samsung m20','sony xperia z5','sony xperia a2','sony xperia y2','acer aspire','acer predator a1','acer predator b2','hp notebookpro','hp omen','hp pavilion','lenovo G70','lenovo Legion','lenovo yoga'],action)=>{
	return state;
}
const searchresult=(state=0,action)=>{
	switch(action.type){
		case "search":{
			state=action.text;
			console.log(state);
			return state;
			}
		default:
				return state;
	}
}
const combine = combineReducers({navlink,profile,validate,trimmer,watches,cart,earphones,lg,samsung,sony,redmi,samsungphone,sonyphone,acer,hp,lenovo,searchitem,searchresult});
   


const store = createStore(combine, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;