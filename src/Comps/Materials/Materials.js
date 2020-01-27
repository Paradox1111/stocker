import React from "react";
import Material from './Material'
// import "./Materials.css";

function Materials(props) {
	let materials = props.mats.map(material=>
		<Material key={material[0].type} mat={material} />)

	return <div className="Materials">{materials}</div>;
}

export default Materials;
