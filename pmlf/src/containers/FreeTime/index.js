import React from "react";

// Components
import SectionWithTitle from "../SectionWithTitle";
import WorkingOnIt from "../../components/WorkingOnIt";

export default function FreeTime() {
	return (
		<SectionWithTitle
			style={{ backgroundColor: "white" }}
			title="FreeTime"
			subtitle="Football, music, movies and other things"
		>
			<WorkingOnIt />
		</SectionWithTitle>
	);
}
