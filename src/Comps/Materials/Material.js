import React from "react";
// import "./Material.css";

function Material(props) {
	const {type, stock, price} = props.mat[0]
	const setMat = props.mat[1]
	function buyOne() {
		setMat({type: type, stock: (stock+1), price: price})
	}
	function buyFive() {
		setMat({type: type, stock: (stock+5), price: price})
	}
	
	return <div className="Material">
		<img src="" alt=""/>
		{type}: {stock}
		<br/>
		${price}
		<br/>
		<button onClick={buyOne}>Buy +1 ${price}</button>
		<button onClick={buyFive}>Buy +5 ${price*5}</button>
	</div>
}

export default Material;
