import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";

const SectionStyled = styled("section")`
	height: 825px;
	background-color: ${darkTheme.colors.greyLight};
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	position: relative;
	border-bottom: solid 1px black; //remove later

	h1,
	h2 {
		text-transform: uppercase;
		color: white;
		font-family: ${darkTheme.fontFamily.main};
		font-weight: 400;
		text-align: center;
		margin: 0;
	}
`;

export default function WhatCanIGetYou() {
	return <SectionStyled></SectionStyled>;
}
