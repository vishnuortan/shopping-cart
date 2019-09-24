import { useSelector , useDispatch } from 'react-redux';
 import React from 'react';
 
const value = ()=>{
	const dispatch= useDispatch();
	return(
		<div id="root">
		<input
        type="checkbox"
        onChange={() => dispatch({ type:"create" })}
		/>
		</div>
		)
}
export {value};