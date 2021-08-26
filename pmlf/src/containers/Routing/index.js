import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import WhatCanIGetYou from "../WhatCanIGetYou";
import WorkingOnIt from "../../components/WorkingOnIt";
import Header from "../Header";
import Background from "../Background";

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
					<Route path="/background">
						<Background />
					</Route>
					<Route path="/">
						<Landing />
						<WhatCanIGetYou />
						<WorkingOnIt />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
