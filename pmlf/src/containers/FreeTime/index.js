import React from "react";
import styled from "styled-components";

// Components
import SectionWithTitle from "../SectionWithTitle";
import DescriptiveHorizontalCard from "../../components/DescriptiveHorizontalCard";

// Assets
import { freeTimeTexts } from "../../assets/texts";

const UlStyled = styled("ul")`
	margin-bottom: 26px;
`;

export default function FreeTime() {
	return (
		<SectionWithTitle
			style={{ backgroundColor: "white" }}
			title="Free time"
			subtitle="Football, illustrating, listening to music and, generally, having fun"
		>
			{
				freeTimeTexts.map((card) => (
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
