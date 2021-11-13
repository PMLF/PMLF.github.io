import React from "react";
import styled from "styled-components";
import SectionWithTitle from "../SectionWithTitle";
import TopicCard from "../../components/TopicCard";
import { darkTheme } from "../../themes";

// Images
import background from "../../images/background.png";
import work from "../../images/work.png";
import freeTime from "../../images/freetime.png";

const CardsSection = styled("section")`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media only screen and (max-width: ${darkTheme.breakpoint.lg}) {
		flex-direction: column;
		align-items: center;
	}
`;

export default function WhatCanIGetYou() {
	return (
		<SectionWithTitle
			title="So... what can I get you?"
			subtitle="People come here for all sorts of reasons"
		>
			<CardsSection>
				<TopicCard
					title="Background"
					link="/background"
					image={background}
				/>
				<TopicCard title="Work" link="/work" image={work} />
				<TopicCard title="Free time" link="freetime" image={freeTime} />
			</CardsSection>
		</SectionWithTitle>
	);
}
