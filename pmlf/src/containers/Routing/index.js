import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import WhatCanIGetYou from "../WhatCanIGetYou";
import Header from "../Header";
import Background from "../Background";
import AuthorNote from "../AuthorNote";
import Work from "../Work";
import FreeTime from "../FreeTime";

// Sidebar
import SidebarMobile from "../SidebarMobile";
import Footer from "../../components/Footer";

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
					<Route path="/work">
						<Work />
					</Route>
					<Route path="/freetime">
						<FreeTime />
					</Route>
					<Route path="/">
						<Landing />
						<WhatCanIGetYou />
						<AuthorNote />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}
