import React from "react";
import { useState } from "react";
import { Link, Switch } from "react-router-dom";

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
			</header>
			<h2 className="money">Money: ${money}</h2>
		</div>
	);
}

export default Stocker;
