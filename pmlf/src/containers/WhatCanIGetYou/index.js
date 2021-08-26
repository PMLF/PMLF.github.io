import React from "react";
import styled from "styled-components";
import SectionWithTitle from "../SectionWithTitle";
import TopicCard from "../../components/TopicCard";
import topicCardImageDummy from "../../images/building_mobile_bg.png";

const CardsSection = styled("section")`
	display: flex;
	flex-direction: row;
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
					image={topicCardImageDummy}
					link="/background"
				/>
				<TopicCard title="Work" />
				<TopicCard title="Free time" />
			</CardsSection>
		</SectionWithTitle>
	);
}
