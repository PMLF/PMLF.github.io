import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";

const SectionStyled = styled("section")`
	background-color: ${darkTheme.colors.greyLight};
	position: relative;
	padding: 20px 10%;

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
		padding-top: 50px;
	}
`;

const Wrapper = styled("div")`
	max-width: 1920px;
	margin: auto;
`;

export default function SectionWithTitle({ title, subtitle, children }) {
	return (
		<SectionStyled>
			<Wrapper>
				{title && <h1>{title}</h1>}
				{subtitle && <h2>{subtitle}</h2>}
				{children}
			</Wrapper>
		</SectionStyled>
	);
}
