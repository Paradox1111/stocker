import React from "react";
import formatPartType from "../../helpers/formatPartType";

function Home(props) {
	const { pcs, images, money, setPcs, mats, comps } = props;

	const { reqMats, stock } = pcs;

	function craftOne() {
		let availMats = 0;
		//for each required material
		for (let i = 0; i < pcs.reqMats.length; i++) {
			//check all materials
			for (let j = 0; j < mats.length; j++) {
				//if a material matches required material and is in stock
				if (
					mats[j][0].type === pcs.reqMats[i].type &&
					mats[j][0].stock >= pcs.reqMats[i].num
				) {
					//increment available materials
					availMats += 1;
					console.log(mats[j][0].type + " is available");
				}
			}
		}
		//for each required component
		for (let i = 0; i < pcs.reqMats.length; i++) {
			//check all components
			for (let j = 0; j < comps.length; j++) {
				//if a component matches required material and is in stock
				if (
					comps[j][0].type === pcs.reqMats[i].type &&
					comps[j][0].stock >= pcs.reqMats[i].num
				) {
					//increment available materials
					availMats += 1;
					console.log(comps[j][0].type + " is available");
				}
			}
		}
		//if there are as many available materials and components as required materials:
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
						setMat({
							...mats[j][0],
							stock: mats[j][0].stock - reqMats[i].num
						});
					}
				}
				for (let j = 0; j < comps.length; j++) {
					//if a component matches required material and is in stock
					if (
						comps[j][0].type === pcs.reqMats[i].type &&
						comps[j][0].stock >= pcs.reqMats[i].num
					) {
						//decrement current component by required amount
						let setComp = comps[j][1];
						console.log(comps[j][0]);
						setComp({
							...comps[j][0],
							stock: comps[j][0].stock - reqMats[i].num
						});
					}
				}
			}
			setPcs({ ...pcs, stock: stock + 1 });
		}
	}
	function sellOne() {
		if (pcs.stock >= 1) {
			setPcs({ ...pcs, stock: stock - 1 });
		}
	}
	const requirements = pcs.reqMats.map(mat => (
		<p key={mat.type}>
			{formatPartType(mat.type)}: {mat.num}
		</p>
	));
	return (
		<div className="pc">
			<img src="" alt="" />
			<strong>{formatPartType(pcs.type)}:</strong> {pcs.stock}
			<br />${pcs.price}
			<br />
			Required materials:
			{requirements}
			<br />
			<button onClick={craftOne}>Craft +1</button>
			<button>Sell -1 +${pcs.price}</button>
		</div>
	);
}

export default Home;
