import React, { useEffect } from "react";
import Component from "./Component";
// import "./Components.css";

function Components(props) {
	console.log(props.comps);
	const { images, comps } = props;
	// console.log(images);
	// images.map(image => {
	// 	console.log(image);
	// });
	let components = comps.map(comp => {
		let image = { undefined };
		switch (comp[0].type) {
			case "ram":
				image = images[0];
				break;
			case "gpu":
				image = images[1];
				break;
			case "hdd":
				image = images[2];
				break;
			case "psu":
				image = image[3];
				break;
			case "cpu":
				image = image[4];
				break;
			case "mobo":
				image = images[5];
				break;
			default:
				image = undefined;
				break;
		}
		return (
			<Component
				key={comp[0].type}
				money={props.money}
				comp={comp}
				image={image}
				mats={props.mats}
			/>
		);
	});
	return <div className="Components">{components}</div>;
}

export default Components;
