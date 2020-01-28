import React from "react";
import { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Components from "./Comps/Components/Components";
import Materials from "./Comps/Materials/Materials";
import formatPartType from "./helpers/formatPartType";
import "./Stocker.css";
import Unsplash from "unsplash-js";

function Stocker() {
	const [money, setMoney] = useState(200);
	//Materials
	const [transistors, setTransistors] = useState({
		type: "transistors",
		stock: 0,
		price: 5
	});
	const [circuitry, setCircuitry] = useState({
		type: "circuitry",
		stock: 0,
		price: 3
	});
	const [ports, setPorts] = useState({ type: "ports", stock: 0, price: 5 });
	const [pcbs, setPcbs] = useState({ type: "pcbs", stock: 0, price: 10 });
	const [flashMem, setFlashMem] = useState({
		type: "flashMem",
		stock: 0,
		price: 10
	});
	const [fans, setFans] = useState({ type: "fans", stock: 0, price: 5 });
	const [heatSinks, setHeatSinks] = useState({
		type: "heatSinks",
		stock: 0,
		price: 5
	});
	const [hdds, setHdds] = useState({ type: "hdds", stock: 0, price: 15 });
	const [cases, setCases] = useState({ type: "cases", stock: 0, price: 15 });
	let mats = [
		[transistors, setTransistors],
		[circuitry, setCircuitry],
		[ports, setPorts],
		[pcbs, setPcbs],
		[flashMem, setFlashMem],
		[fans, setFans],
		[heatSinks, setHeatSinks],
		[hdds, setHdds],
		[cases, setCases]
	];

	//components
	const [mobo, setMobo] = useState({
		type: "mobo",
		stock: 0,
		price: 50,
		reqMats: [
			{ type: "pcbs", num: 1 },
			{ type: "circuitry", num: 2 },
			{ type: "ports", num: 2 },
			{ type: "transistors", num: 2 },
			{ type: "heatSinks", num: 2 }
		]
	});
	const [cpu, setCpu] = useState({
		type: "cpu",
		stock: 0,
		price: 45,
		reqMats: [
			{ type: "pcbs", num: 1 },
			{ type: "circuitry", num: 1 },
			{ type: "transistors", num: 5 }
		]
	});
	const [gpu, setGpu] = useState({
		type: "gpu",
		stock: 0,
		price: 50,
		reqMats: [
			{ type: "pcbs", num: 1 },
			{ type: "circuitry", num: 1 },
			{ type: "ports", num: 2 },
			{ type: "transistors", num: 2 },
			{ type: "heatSinks", num: 1 },
			{ type: "fans", num: 1 }
		]
	});
	const [psu, setPsu] = useState({
		type: "psu",
		stock: 0,
		price: 45,
		reqMats: [
			{ type: "pcbs", num: 1 },
			{ type: "circuitry", num: 2 },
			{ type: "ports", num: 2 },
			{ type: "fans", num: 1 },
			{ type: "heatSinks", num: 1 }
		]
	});
	const [storage, setStorage] = useState({
		type: "storage",
		stock: 0,
		price: 35,
		reqMats: [
			{ type: "pcbs", num: 1 },
			{ type: "hdds", num: 1 },
			{ type: "ports", num: 1 }
		]
	});
	const [ram, setRam] = useState({
		type: "ram",
		stock: 0,
		price: 25,
		reqMats: [
			{ type: "pcbs", num: 1 },
			{ type: "flashMem", num: 1 }
		]
	});

	let comps = [
		[mobo, setMobo],
		[cpu, setCpu],
		[gpu, setGpu],
		[psu, setPsu],
		[storage, setStorage],
		[ram, setRam]
	];

	//Complete PC
	const [pcs, setPcs] = useState({
		type: "pc",
		stock: 0,
		price: 225,
		reqMats: [
			{ type: "mobo", num: 1 },
			{ type: "cpu", num: 1 },
			{ type: "gpu", num: 1 },
			{ type: "psu", num: 1 },
			{ type: "storage", num: 1 },
			{ type: "ram", num: 1 },
			{ type: "case", num: 1 },
			{ type: "fans", num: 4 }
		]
	});

	useEffect(() => {
		const key = process.env.REACT_APP_KEY;
		const url = "https://api.unsplash.com/";
		const unsplash = new Unsplash({ accessKey: key });

		// unsplash.search.photos("transistors")
		// .then(response => response.json())
		// .then(response=>console.log(response))

		// fetch(`${url}search/photos?&client_id=${key}&query=${'transistors'}`)
		// .then(response => response.json())
		// .then(response => console.log(response))
	}, []);

	const requirements = pcs.reqMats.map(mat => (
		<p key={mat.type}>
			{formatPartType(mat.type)}: {mat.num}
		</p>
	));

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
					render={() => (
						<Components mats={mats} comps={comps} money={[money, setMoney]} />
					)}
				/>
				<Route
					path="/Materials"
					render={() => <Materials mats={mats} money={[money, setMoney]} />}
				/>
			</Switch>
			<main>
				<div className="pc">
					<img src="" alt="" />
					<strong>{formatPartType(pcs.type)}:</strong> {pcs.stock}
					<br />${pcs.price}
					<br />
					Required materials:
					{requirements}
					<br />
					<button>Craft +1</button>
					<button>Sell -1 +${pcs.price}</button>
				</div>
			</main>
		</div>
	);
}

export default Stocker;
