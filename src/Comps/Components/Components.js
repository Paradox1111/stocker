import React, { useEffect } from "react";
import Component from "./Component";
// import "./Components.css";

function Components(props) {
	let components = props.comps.map(comp => (
		<Component
			key={comp[0].type}
			money={props.money}
			comp={comp}
			mats={props.mats}
		/>
	));

	return <div className="Components">{components}</div>;
}

export default Components;
