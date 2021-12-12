import React from "react";
import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";
import { darkTheme } from "../../themes";

const ButtonStyled = styled("button")`
	font-size: 20px;
	line-height: 50px;
	margin-left: 20px;
	background-color: ${darkTheme.colors.greyMid};
	color: ${darkTheme.colors.white1};
	border-radius: 4px;
	border: none;
	display: flex;
	align-items: center;
	padding: 0 20px;

	&:hover {
		transform: scale(1.02);
		background-color: ${darkTheme.colors.greyMidHover};
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.xl}) {
		font-size: 20px;
	}

	svg {
		margin-right: 8px;
	}
	p {
		margin: 0;
	}
`;

export default function Button({ icon, label }) {
	return (
		<ButtonStyled>
			<SvgIcon component={icon} />
			<p>{label}</p>
		</ButtonStyled>
	);
}
