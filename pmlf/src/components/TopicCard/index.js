import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { SvgIcon } from "@material-ui/core";

const DivStyled = styled("div")`
	height: 500px;
	width: 30%;
	background-color: red;
	margin: 5% 50px;
	border-radius: 20px;
	position: relative;
`;

const Title = styled("p")`
	text-transform: uppercase;
	font-size: 26px;
	margin: 40px;
	font-weight: 600;
	font-family: ${darkTheme.fontFamily.main};
`;

const ArrowDiv = styled("div")`
	background-color: white;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 40px;
	right: 40px;
`;

export default function TopicCard({ title, image, link }) {
	return (
		<DivStyled href="/background">
			<Title>{title}</Title>
			<ArrowDiv>
				<SvgIcon component={ArrowForwardIcon} />
			</ArrowDiv>
		</DivStyled>
	);
}
