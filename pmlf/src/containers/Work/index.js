import React from "react";
import styled from "styled-components";

// Components
import SectionWithTitle from "../SectionWithTitle";
import DescriptiveHorizontalCard from "../../components/DescriptiveHorizontalCard";

// Content
import { workTexts } from "../../assets/texts";

const UlStyled = styled("ul")`
	margin-bottom: 26px;
`;

export default function Work() {
	return (
		<SectionWithTitle
			style={{ backgroundColor: "white" }}
			title="Work"
			subtitle="What I do on the daily"
		>
			{
				workTexts.map((card) => (
					<DescriptiveHorizontalCard
						key={card.id}
						imgSrc={card.img.default}
						imgAlt={card.imgAlt}
						title={card.title}
						subtitle={card.subtitle}
					>
						<UlStyled>
							{card.paragraphs.map((li, index) => (
								<li key={index}>{li}</li>
							))}
						</UlStyled>
					</DescriptiveHorizontalCard>
				))}
		</SectionWithTitle>
	);
}
