import React, { useEffect } from "react";
import formatPartType from "../../helpers/formatPartType";
// import "./Component.css";

function Component(props) {
	const { type, stock, price } = props.comp[0];
	const setComp = props.comp[1];
	const money = props.money[0];
	const setMoney = props.money[1];
	const reqMats = props.comp[0].reqMats;
	const mats = props.mats;

	function craftOne() {
		//check for and reduce requisite mats
		let availMats = 0;
		//for each required materials
		for (let i = 0; i < reqMats.length; i++) {
			//check all materials
			for (let j = 0; j < mats.length; j++) {
				//if a material matches required material and is in stock
				if (
					mats[j][0].type === reqMats[i].type &&
					mats[j][0].stock >= reqMats[i].num
				) {
					//increment available materials
					availMats += 1;
				}
			}
		}
		//if there are as many available materials as required materials:
		if (availMats === reqMats.length) {
			for (let i = 0; i < reqMats.length; i++) {
				for (let j = 0; j < mats.length; j++) {
					//if a material matches required material and is in stock
					if (
						mats[j][0].type === reqMats[i].type &&
						mats[j][0].stock >= reqMats[i].num
					) {
						//decrement current material by required amount
						let setMat = mats[j][1];
						setMat({ ...mats[j][0], stock: mats[j][0].stock - reqMats[i].num });
					}
				}
			}
			setComp({ ...props.comp[0], stock: stock + 1 });
		}
	}
	function sellOne() {
		if (stock >= 1) {
			setComp({ ...props.comp[0], stock: stock - 1 });
			setMoney(money + price);
		}
	}
	useEffect(() => {
		const key = `Client-ID ${process.env.REACT_APP_IMGURKEY}`;
		const url =
			"https://api.imgur.com/3/account/Paradoxicality/gallery_favorites/";

		fetch(url, {
			method: "GET",
			headers: new Headers({
				Authorization: key
			})
		})
			.then(response => response.json())
			.then(response => console.log(response));
	}, []);
	const requirements = reqMats.map(mat => (
		<p key={mat.type}>
			{formatPartType(mat.type)}: {mat.num}
		</p>
	));
	return (
		<div className="Component">
			<img src="" alt="" />
			<strong>{formatPartType(type)}:</strong> {stock}
			<br />${price}
			<br />
			Required materials:
			{requirements}
			<br />
			<button onClick={craftOne}>Craft +1</button>
			<button onClick={sellOne}>Sell -1 +${price}</button>
		</div>
	);
}

export default Component;
