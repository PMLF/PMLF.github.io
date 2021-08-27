import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";

const Card = styled("div")`
	width: 100%;
	background-color: white;
	margin: 40px 0;
	padding: 40px;
	border-radius: 20px;
	display: flex;
	align-items: flex-start;
`;

const Image = styled("img")`
	height: 160px;
`;

const TextDiv = styled("div")`
	font-family: ${darkTheme.fontFamily.main};
	margin-left: 40px;
`;

const CardTitle = styled("p")`
	font-size: 26px;
	margin-bottom: 10px;
`;

const CardSubtitle = styled("p")`
	font-size: 20px;
	margin: 10px 0;
`;

export default function DescriptiveHorizontalCard({
	imgSrc,
	imgAlt,
	title,
	subtitle,
	children,
}) {
	return (
		<Card>
			<Image src={imgSrc} alt={imgAlt} />
			<TextDiv>
				<CardTitle>{title}</CardTitle>
				<CardSubtitle>{subtitle}</CardSubtitle>
				{children}
			</TextDiv>
		</Card>
	);
}
