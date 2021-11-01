import React from "react";
import SectionWithTitle from "../SectionWithTitle";
import DescriptiveHorizontalCard from "../../components/DescriptiveHorizontalCard";
import styled from "styled-components";
import { backgroundTexts } from "../../assets/texts";

const UlStyled = styled("ul")`
	margin-bottom: 26px;
`;

export default function Background() {
	return (
		<SectionWithTitle
			title="Background"
			subtitle="Here you'll find some of skills and studies"
		>
			{backgroundTexts.map((card) => (
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
