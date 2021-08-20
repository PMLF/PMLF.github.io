import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { SvgIcon } from "@material-ui/core";

const Anchor = styled("a")`
	height: 500px;
	width: 30%;
	margin: 5% 50px;
	text-decoration: inherit;
	color: inherit;

	&:hover {
		transform: scale(1.02);
		transition: transform 0.3s;

		div {
			transition: background-size 5s;
			background-size: 105%;
		}
	}
`;

const DivStyled = styled("div")`
	height: 100%;
	width: 100%;
	background-color: red;
	border-radius: 20px;
	position: relative;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: cover;
`;

const Title = styled("p")`
	text-transform: uppercase;
	font-size: 26px;
	padding: 40px;
	margin: 0;
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
	-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

	&:hover {
		transform: scale(1.1);
		background-color: ${darkTheme.colors.greyLight};
		-webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
		transition: all 0.3s;
	}
`;

export default function TopicCard({ title, image, link }) {
	return (
		<Anchor href={link}>
			<DivStyled style={{ backgroundImage: `url(${image})` }}>
				<Title>{title}</Title>
				<ArrowDiv>
					<SvgIcon component={ArrowForwardIcon} />
				</ArrowDiv>
			</DivStyled>
		</Anchor>
	);
}
