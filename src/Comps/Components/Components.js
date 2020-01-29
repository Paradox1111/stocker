import React, { useEffect } from "react";
import Component from "./Component";
// import "./Components.css";

function Components(props) {
	const { images, comps } = props;
	let image = { undefined };
	let components = comps.map(comp => {
		console.log(comp[0].type);
		console.log(images);
		switch (comp[0].type) {
			case "ram":
				image = images[0];
				break;
			case "gpu":
				image = images[1];
				break;
			case "storage":
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
		console.log(image);
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
	if (!image || !comps) {
		return null;
	} else {
		return <div className="Components">{components}</div>;
	}
}

export default Components;
