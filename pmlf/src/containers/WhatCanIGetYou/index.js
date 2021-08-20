import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";

const SectionStyled = styled("section")`
	height: 825px;
	background-color: ${darkTheme.colors.greyLight};
	position: relative;
	padding: 4% 10%;
	border-bottom: solid 1px black; //remove later

	h1,
	h2 {
		text-transform: uppercase;
		color: ${darkTheme.colors.greyDarker};
		font-family: ${darkTheme.fontFamily.main};
		font-weight: 400;
		text-align: left;
		margin: 0;
	}
	h1 {
		font-size: 50px;
	}
`;

const Wrapper = styled("div")`
	max-width: 1920px;
	margin: auto;
`;

export default function WhatCanIGetYou() {
	return (
		<SectionStyled>
			<Wrapper>
				<h1>So... what can I get you?</h1>
				<h2>People come here for all sorts of reasons</h2>
			</Wrapper>
		</SectionStyled>
	);
}
