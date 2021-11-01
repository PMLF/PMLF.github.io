import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";

const SmallBubble = styled("div")`
	position: absolute;
	background: #900000;
	border-radius: 30px;
	height: 60px;
	width: 200px;
	color: white;
	top: 40%;
	left: 32%;

	&:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 70%;
		width: 0;
		height: 0;
		border: 20px solid transparent;
		border-top-color: #900000;
		border-bottom: 0;
		border-right: 0;
		margin-left: -12px;
		margin-bottom: -20px;
	}
	p {
		text-align: center;
		font-size: 26px;
		line-height: 60px;
		text-transform: uppercase;
		font-family: ${darkTheme.fontFamily.main};
		margin: 0;
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.xl}) {
		left: 20%;
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.lg}) {
		left: 15%;
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
		left: 10%;
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
		top: 30%;
		height: 40px;
		width: 140px;
		p {
			font-size: 18px;
			line-height: 40px;
		}
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.xs}) {
		top: 40%;
	}
`;

export default function SpeechBubble({ label }) {
	return (
		<SmallBubble>
			<p>{label}</p>
		</SmallBubble>
	);
}
