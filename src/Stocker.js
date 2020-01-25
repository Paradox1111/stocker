import React from "react";
import { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Components from "./Comps/Components/Components";
import Materials from "./Comps/Materials/Materials";
import "./Stocker.css";

function Stocker() {
	const [money, setMoney] = useState(500);
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
			<main>
				<Switch>
					<Route path="/" component={Stocker} />
					<Route path="/Components" component={Components} />
					<Route path="/Materials" component={Materials} />
				</Switch>
			</main>
		</div>
	);
}

export default Stocker;
