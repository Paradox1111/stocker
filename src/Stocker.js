import React from "react";
import { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Components from "./Comps/Components/Components";
import Materials from "./Comps/Materials/Materials";
import formatPartType from "./helpers/formatPartType";
import "./Stocker.css";
import Home from "./Comps/Home/Home";

function Stocker() {
	const [money, setMoney] = useState(1000);
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
	const [ports, setPorts] = useState({
		type: "ports",
		stock: 0,
		price: 5
	});
	const [pcbs, setPcbs] = useState({
		type: "pcbs",
		stock: 0,
		price: 10
	});
	const [flashMem, setFlashMem] = useState({
		type: "flashMem",
		stock: 0,
		price: 10
	});
	const [fans, setFans] = useState({
		type: "fans",
		stock: 0,
		price: 5
	});
	const [heatSinks, setHeatSinks] = useState({
		type: "heatSinks",
		stock: 0,
		price: 5
	});
	const [hdds, setHdds] = useState({
		type: "hdds",
		stock: 0,
		price: 15
	});
	const [cases, setCases] = useState({
		type: "cases",
		stock: 0,
		price: 15
	});
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

	const comps = [
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
			{ type: "cases", num: 1 },
			{ type: "fans", num: 4 }
		]
	});

	//fetch all image urls
	// const [images, setImages] = useState(undefined);
	// useEffect(() => {
	// 	const key = `Client-ID ${process.env.REACT_APP_IMGUR_KEY}`;
	// 	const url = `https://api.imgur.com/3/account/Paradoxicalityman/gallery_favorites/`;
	// 	fetch(url, {
	// 		method: "GET",
	// 		headers: new Headers({
	// 			Authorization: key
	// 		})
	// 	})
	// 		.then(response => response.json())
	// 		.then(response => {
	// 			localStorage.setItem("images", JSON.stringify(response.data));
	// 			let data = localStorage.getItem("images");
	// 			data = JSON.parse(data);
	// 			setImages([...data]);
	// 		});
	// }, []);
	// console.log(images);

	//fetch all image urls
	const [images, setImages] = useState(undefined);
	useEffect(() => {
		const key = `Client-ID ${process.env.REACT_APP_IMGUR_KEY}`;
		const url = `https://api.imgur.com/3/account/Paradoxicalityman/gallery_favorites/`;
		fetch(url, {
			method: "GET",
			headers: new Headers({
				Authorization: key
			})
		})
			.then(response => response.json())
			.then(response => {
				setImages(response.data);
				console.log(response);
			});
	}, []);

	//retrieve locally stored save state (if any) and overwrite default values
	useEffect(() => {
		let data = localStorage.getItem("save-state");
		try {
			data = JSON.parse(data);
		} catch (error) {
			console.log(error);
		}
		if (!data === undefined) {
			setPcs({ ...data.pcs });
			setMoney(data.money);
			//components
			setCpu({ ...data.cpu });
			setMobo({ ...data.mobo });
			setGpu({ ...data.gpu });
			setPsu({ ...data.psu });
			setStorage({ ...data.storage });
			setRam({ ...data.ram });
			//materials
			setRam({ ...data.ram });
			setCircuitry({ ...data.circuitry });
			setTransistors({ ...data.transistors });
			setPorts({ ...data.ports });
			setPcbs({ ...data.pcbs });
			setFlashMem({ ...data.flashMem });
			setFans({ ...data.fans });
			setHeatSinks({ ...data.heatSinks });
			setHdds({ ...data.hdds });
			setCases({ ...data.cases });
		}
	}, []);

	//save game state to local storage
	useEffect(() => {
		localStorage.setItem(
			"save-state",
			JSON.stringify({
				mobo,
				cpu,
				gpu,
				psu,
				storage,
				ram,
				pcs,
				money,
				transistors,
				circuitry,
				ports,
				pcbs,
				flashMem,
				fans,
				heatSinks,
				hdds,
				cases
			})
		);
	});

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
					{images && comps && (
						<Route
							path="/Components"
							render={() => (
								<Components
									mats={mats}
									comps={comps}
									images={images}
									money={[money, setMoney]}
								/>
							)}
						/>
					)}
					<Route
						path="/Materials"
						render={() => <Materials mats={mats} money={[money, setMoney]} />}
					/>
					<Route
						path="/"
						render={() => (
							<Home
								comps={comps}
								mats={mats}
								images={images}
								pcs={pcs}
								setPcs={setPcs}
								money={[money, setMoney]}
							/>
						)}
					/>
				</Switch>
			</main>
		</div>
	);
}

export default Stocker;
