import React, { useEffect } from "react";
import { render } from "enzyme";
// import "./Components.css";

class Components extends React.Component {
	componentDidMount() {
		console.log("test");
	}
	render() {
		return <div className="Components">Components</div>;
	}
}

export default Components;
