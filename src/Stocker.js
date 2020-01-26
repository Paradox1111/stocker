import React from "react";
import { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Components from "./Comps/Components/Components";
import Materials from "./Comps/Materials/Materials";
import "./Stocker.css";

function Stocker() {
	const [money, setMoney] = useState(500);
	//Materials
	const [transistors, setTransistors] = useState(0);
	const [circuitry, setCircuitry] = useState(0);
	useEffect(() => {
		console.log("test");
	}, []);
	return (
		<div className="Stocker">
			<header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/Components">Components</Link>
					<Link to="/Materials">Materials</Link>
				</nav>
				<h2 className="money">Money: ${money}</h2>
			</header>
			<Switch>
				<Route exact path="/" />
				<Route
					path="/Components"
					render={() => <Components setMoney={setMoney} />}
				/>
				<Route
					path="/Materials"
					render={() => <Materials setMoney={setMoney} />}
				/>
			</Switch>
			<main></main>
		</div>
	);
}

export default Stocker;
