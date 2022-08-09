import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";
import { SvgIcon } from "@material-ui/core";

// Icons
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

const FooterStyled = styled("footer")`
	background-color: ${darkTheme.colors.greyDarker};
	display: flex;
	justify-content: center;
	padding: 40px 0;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	@media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
		flex-direction: column;
		align-items: center;

		a:last-of-type {
			margin-top: 20px;
		}
	}
`;

const Button = styled("button")`
	font-size: 24px;
	background-color: ${darkTheme.colors.greyMid};
	border-radius: 4px;
	color: ${darkTheme.colors.white1};
	border: 0;
	display: flex;
	align-items: center;
	padding: 8px 12px;
	cursor: pointer;

	&:last-of-type {
		margin-left: 20px;
	}
	&:hover {
		transform: scale(1.02);
		background-color: ${darkTheme.colors.greyMidHover};
	}
`;

const Anchor = styled("a")`
	text-decoration: none;
`;

export default function Footer() {
	return (
		<FooterStyled>
			<Anchor
				href="https://www.linkedin.com/in/pedromlfonseca/"
				target="_blank"
			>
				<Button>
					<SvgIcon component={QuestionAnswerIcon} />
					Let's get in touch!
				</Button>
			</Anchor>
			<Anchor href="https://github.com/PMLF" target="_blank">
				<Button>
					PMLF™
				</Button>
			</Anchor>
		</FooterStyled>
	);
}
