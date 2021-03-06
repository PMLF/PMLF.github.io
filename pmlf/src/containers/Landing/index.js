import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";
import Logo from "../../images/pmlflogotransparent.svg";
import FootballFan from "../../images/claque.svg";
import FootballFanBorders from "../../images/claque_borders.svg";
import FrontEndDev from "../../images/frontenddev.svg";
import FrontEndDevBorders from "../../images/frontenddev_borders.svg";
import SpeechBubble from "../../components/SpeechBubble";

const SectionStyled = styled("section")`
	background-color: ${darkTheme.colors.greyDark};

	@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
		height: 600px;
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
		height: 500px;
	}
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

const Wrapper = styled("div")`
	margin: auto;
	height: 100%;
	max-height: 750px;
	max-width: 1920px;
	position: relative;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;

	@media only screen and (min-width: ${darkTheme.breakpoint.lg}) {
		padding: 50px 0 0;
	}
`;

const Name = styled("h1")`
	font-size: 70px;

	@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
		font-size: 58px;
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
		font-size: 40px;
	}
`;

const Description = styled("h2")`
	@media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
		font-size: 20px;
	}
`;

const Face = styled("img")`
	max-height: 70%;
	margin: 20px auto 0;
	position: relative;
	z-index: 2;
	max-width: 600px;

	@media only screen and (max-width: ${darkTheme.breakpoint.lg}) {
		margin: 40px auto 0;
		max-width: 50%;
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
		max-width: 85%;
	}
`;

const BackImageStyled = styled("div")`
	position: absolute;
	bottom: 0;
	margin: 0;

	&:hover {
		img {
			visibility: hidden;
		}
	}
	img {
		height: 100%;
		margin: 0;
	}
	&:nth-of-type(2) {
		height: 350px;
		left: 0;
		z-index: 1;
		&:hover {
			background: url(${FrontEndDev}) no-repeat;
			background-size: 100% auto;
		}
		@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
			height: 280px;
		}
		@media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
			height: 210px;
			background: url(${FrontEndDev}) no-repeat;
			background-size: 100% auto;
			img {
				visibility: hidden;
			}
		}
	}
	&:last-of-type {
		height: 450px;
		right: 0;
		&:hover {
			background: url(${FootballFan}) no-repeat;
			background-size: 100% auto;
		}
		@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
			height: 350px;
		}
		@media only screen and (max-width: ${darkTheme.breakpoint.sm}) {
			height: 220px;
			background: url(${FootballFan}) no-repeat;
			background-size: 100% auto;
			img {
				visibility: hidden;
			}
		}
	}
`;

export default function Landing() {
	return (
		<section>
			<SectionStyled>
				<Wrapper>
					<Name>Pedro Fonseca</Name>
					<Description>Front End dev | Football fan</Description>
					<Face src={Logo} alt="Logo" className="logo" />
					<SpeechBubble label="Let's talk?" />
					<BackImageStyled>
						<img
							src={FrontEndDevBorders}
							alt="Front End developer"
						/>
					</BackImageStyled>
					<BackImageStyled>
						<img src={FootballFanBorders} alt="Football fan" />
					</BackImageStyled>
				</Wrapper>
			</SectionStyled>
		</section>
	);
}
