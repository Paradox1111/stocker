import React from "react";
import { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Components from "./Comps/Components/Components";
import Materials from "./Comps/Materials/Materials";
import "./Stocker.css";

function Stocker() {
	const [money, setMoney] = useState(500);
	//Materials
	const [transistors, setTransistors] = useState({ type: "transistors", stock: 0, price: 5 });
	const [circuitry, setCircuitry] = useState({ type: "circuitry", stock: 0, price: 3 });
	const [ports, setPorts] = useState({ type: "ports", stock: 0, price: 5 });
	const [pcbs, setPcbs] = useState({ type: "pcbs", stock: 0, price: 10 });
	const [flashMem, setFlashMem] = useState({ type: "flashMem", stock: 0, price: 10 });
	const [fans, setFans] = useState({ type: "fans", stock: 0, price: 5 });
	const [heatSinks, setHeatSinks] = useState({ type: "heatSinks", stock: 0, price: 5 });
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
]
	// let mats = {
	// 	transistors: {transistors: transistors, setTransistors: setTransistors},
	// 	circuitry: {circuitry: circuitry, setCircuitry: setCircuitry},
	// 	ports: {ports: ports, setPorts: setPorts},
	// 	pcbs: {pcbs: pcbs, setPcbs: setPcbs},
	// 	flashMem: {flashMem: flashMem, setFlashMem: setFlashMem},
	// 	fans: {fans: fans, setFans: setFans},
	// 	heatSinks: {heatSinks:heatSinks, setHeatSinks: setHeatSinks},
	// 	hdds: {hdds: hdds, setHdds: setHdds},
	// 	cases: {cases: cases, setCases: setCases}
	// }

	//components
	const [mobo, setMobo] = useState({ stock: 0, price: 50 });
	const [cpu, setCpu] = useState({ stock: 0, price: 45 });
	const [gpu, setGpu] = useState({ stock: 0, price: 50 });
	const [psu, setPsu] = useState({ stock: 0, price: 45 });
	const [storage, setStorage] = useState({ stock: 0, price: 35 });
	const [ram, setRam] = useState({ stock: 0, price: 25 });
	let comps = {
		mobo: mobo,
		cpu: cpu,
		gpu: gpu,
		psu: psu,
		storage: storage,
		ram: ram
	}
	useEffect(() => {
		setMoney(200)
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
					render={() => <Components comps={comps} funcs={{
					setMobo: setMobo,
					setCpu: setCpu,
					setGpu: setGpu,
					setPsu: setPsu,
					setStorage: setStorage,
					setRam: setRam}}/>}
				/>
				<Route
					path="/Materials"
					render={() => <Materials mats={mats} setMoney={setMoney} setTransistors={setTransistors} setCircuitry={setCircuitry} setPorts={setPorts} setPcbs={setPcbs} setFlashMem={setFlashMem} setHeatSinks={setHeatSinks} setHdds={setHdds} setCases={setCases} />}
				/>
			</Switch>
			<main></main>
		</div>
	);
}

export default Stocker;
