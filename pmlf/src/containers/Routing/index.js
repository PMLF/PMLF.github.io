import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import Header from "../Header";

// Sidebar
import SidebarMobile from "../SidebarMobile";

export default function Routing() {
	const [isSidebarHidden, setIsSidebarHidden] = useState(true);

	return (
		<Router>
			<div>
				<Header
					isSidebarHidden={isSidebarHidden}
					setIsSidebarHidden={setIsSidebarHidden}
				/>
				<SidebarMobile
					hidden={isSidebarHidden}
					hiddenToggle={() => setIsSidebarHidden(true)}
				/>

				<Switch>
					{/*New routes here*/}
					<Route path="/">
						<Landing />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
