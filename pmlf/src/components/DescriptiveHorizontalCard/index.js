import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";

const Card = styled("div")`
	width: calc(100% - 80px);
	background-color: white;
	margin: 40px 0;
	padding: 40px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	-webkit-box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.4);
	-moz-box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.4);
	box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.4);
	transition: all 0.2s;
	&:hover {
		transform: scale(0.99);
		-webkit-box-shadow: 5px 5px 8px 2px rgba(0, 0, 0, 0.4);
		-moz-box-shadow: 5px 5px 8px 2px rgba(0, 0, 0, 0.4);
		box-shadow: 5px 5px 8px 2px rgba(0, 0, 0, 0.4);
	}
`;

const CardTop = styled("div")`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
`;

const Image = styled("img")`
	height: 80px;
	margin-right: 20px;
`;

const CardTitle = styled("p")`
	font-size: 26px;
	margin: 10px 0;
`;

const CardSubtitle = styled("p")`
	font-size: 20px;
	margin: 10px 0;
`;

const TextDiv = styled("div")`
	font-family: ${darkTheme.fontFamily.main};
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
			<CardTop>
				<Image src={imgSrc} alt={imgAlt} />
				<div>
					<CardTitle>{title}</CardTitle>
					<CardSubtitle>{subtitle}</CardSubtitle>
				</div>
			</CardTop>
			<TextDiv>{children}</TextDiv>
		</Card>
	);
}
