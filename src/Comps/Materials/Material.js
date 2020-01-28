import React, { useEffect } from "react";
import formatPartType from "../../helpers/formatPartType";
// import "./Material.css";

function Material(props) {
	const { type, stock, price } = props.mat[0];
	const setMat = props.mat[1];
	const money = props.money[0];
	const setMoney = props.money[1];

	function buyOne() {
		setMat({ type: type, stock: stock + 1, price: price });
		setMoney(money - price);
	}
	function buyFive() {
		setMat({ type: type, stock: stock + 5, price: price });
		setMoney(money - price * 5);
	}
	// useEffect(() => {
	// 	const key = process.env.REACT_APP_KEY
	// 	const url = "https://api.unsplash.com/"
	// 	fetch(`${url}search/photos?&query=${type}&AccessKey=${key}`)
	// 	.then(response => response.json())
	// 	.then(response => console.log(response))
	// }, []);
	return (
		<div className="Material">
			<img src="" alt="" />
			<strong>{formatPartType(type)}:</strong> {stock}
			<br />${price}
			<br />
			<button onClick={buyOne}>Buy +1 ${price}</button>
			<button onClick={buyFive}>Buy +5 ${price * 5}</button>
		</div>
	);
}

export default Material;
