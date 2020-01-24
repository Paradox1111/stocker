import React from "react";
import { useState } from "react";

import "./Stocker.css";

function Stocker() {
	const [money, setMoney] = useState(500);
	return (
		<div className="Stocker">
			<header>
				<nav></nav>
			</header>
			<h2 className="money">Money: ${money}</h2>
		</div>
	);
}

export default Stocker;
