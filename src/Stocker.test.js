import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";
import Stocker from "./Stocker";

describe("when Stocker loads", () => {
	let component;
	beforeEach(() => {
		component = shallow(<Stocker />);
	});
	it("displays nav bar", () => {
		expect(
			component.contains(
				<nav>
					<Link to="/">Home</Link>
					<Link to="/Components">Components</Link>
					<Link to="/Materials">Materials</Link>
				</nav>
			)
		).toBe(true);
	});
});
