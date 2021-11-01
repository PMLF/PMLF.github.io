import React from "react";

// Components
import SectionWithTitle from "../SectionWithTitle";
import WorkingOnIt from "../../components/WorkingOnIt";

export default function Work() {
	return (
		<SectionWithTitle
			style={{ backgroundColor: "white" }}
			title="Work"
			subtitle="What I do on the daily"
		>
			<WorkingOnIt />
		</SectionWithTitle>
	);
}
