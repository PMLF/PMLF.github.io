import React, { useState } from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";

// Buttons
import NavBarButton from "../../components/NavBarButton";
import SocialMediaButton from "../../components/SocialMediaButton";

// Signature
import NavBarImg from "../../components/NavBarImg";
import Signature from "../../images/signature_white.svg";

// Documents
import CvDocument from "../../assets/CV_PEDROFONSECA.pdf";

// Icons
import SvgIcon from "@material-ui/core/SvgIcon";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import InstagramIcon from "@material-ui/icons/Instagram";
import SpotifyIcon from "../../images/spotify.svg";
import CvIcon from "../../images/cv_icon_white.svg";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import CodeIcon from "@material-ui/icons/Code";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import MenuIcon from "@material-ui/icons/Menu";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

const NavStyled = styled("nav")`
	background-color: ${darkTheme.colors.greyDarker};
	padding: 20px;
	align-items: center;

	ul {
		margin: 10px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		padding-right: 5%;
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
		display: flex;
		&& {
			justify-content: space-between;
		}
	}
`;

const Wrapper = styled("div")`
	margin: auto;
	max-width: 1920px;
	position: relative;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
		margin: 0 16px;
	}
`;

const HeaderContainer = styled("div")`
	color: white;
	display: flex;
	align-items: center;
	margin-left: 5%;
`;

const SocialLeftContainer = styled("div")`
	display: flex;
	flex-direction: row;
	@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
		display: none;
	}
`;

const SocialRightContainer = styled("div")`
	margin: 0;
	position: relative;
	display: flex;
	align-items: center;
`;

const OptionalIcons = styled("div")`
	display: flex;
	align-items: center;

	@media only screen and (max-width: ${darkTheme.breakpoint.lg}) {
		position: absolute;
		flex-direction: column;
		background-color: ${darkTheme.colors.greyDarker};
		top: 60px;
		left: -20px;
		z-index: 1;
		border-radius: 8px;
		padding: 20px;

		a {
			&:nth-of-type(-n + 2) {
				margin-bottom: 24px;
			}
			p {
				top: 20px;
			}
		}
	}
`;

const MoreIcon = styled(SvgIcon)`
	margin: 0 16px;
	padding: 4px;
	&:hover {
		background-color: #444;
		transform: rotate(90deg);
		transition: all 0.3s;
		border-radius: 6px;
	}
	@media only screen and (min-width: calc(${darkTheme.breakpoint.lg} + 1px)) {
		&& {
			display: none;
		}
	}
	@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
		&& {
			display: none;
		}
	}
`;

const RightNavUl = styled("ul")`
	@media only screen and (max-width: ${darkTheme.breakpoint.md}) {
		&& {
			display: none;
		}
	}
`;

const MenuIconStyled = styled(MenuIcon)`
	&& {
		font-size: 28px;
	}
	color: white;
	margin-right: 5%;
	padding: 5px;
	border-radius: 6px;
	&:hover {
		transform: scale(1.1);
		background-color: #444;
	}
	@media only screen and (min-width: calc(${darkTheme.breakpoint.md} + 1px)) {
		&& {
			display: none;
		}
	}
`;

export default function Header({ isSidebarHidden, setIsSidebarHidden }) {
	const [displayAllSocial, setDisplayAllSocial] = useState(false);

	return (
		<NavStyled>
			<Wrapper>
				<HeaderContainer>
					<NavBarImg src={Signature} alt="Signature" />
					<SocialLeftContainer>
						<SocialMediaButton
							href="https://www.linkedin.com/in/pedromlfonseca/"
							icon={LinkedInIcon}
							colorArray={["#0E76A8", "#084561"]}
							borderRadius="6px"
							label="LinkedIn"
						/>
						<SocialMediaButton
							href="mailto:pmlfonseca@outlook.com"
							icon={AlternateEmailIcon}
							colorArray={["#0F70D0", "#4FD8FF"]}
							borderRadius="50%"
							label="Email me"
						/>
						<SocialMediaButton
							href="https://github.com/PMLF"
							icon={GitHubIcon}
							colorArray={["#0D2634", "#266F99"]}
							borderRadius="50%"
							label="GitHub"
						/>
					</SocialLeftContainer>
					<SocialRightContainer>
						{displayAllSocial ||
						window.innerWidth >
							darkTheme.breakpoint.md.slice(0, -2) ? (
							<OptionalIcons>
								<SocialMediaButton
									href={CvDocument}
									icon={CvIcon}
									colorArray={[]}
									borderRadius="6px"
									label="CV"
									alt="CV download link"
									download="CV_PEDROFONSECA.pdf"
								/>
								<SocialMediaButton
									href="https://open.spotify.com/user/21xkghmsk6kr5jao2aniugvda?si=a05ea3991aac468d"
									icon={SpotifyIcon}
									colorArray={["#118A3D", "#118A3D"]}
									borderRadius="50%"
									label="Spotify"
									alt="Spotify link"
								/>
								<SocialMediaButton
									href="https://www.instagram.com/thedrawingdev/"
									icon={InstagramIcon}
									colorArray={[
										"#3E6BC9",
										"#B63A9D",
										"#FC5245",
										"#FEDA55",
									]}
									borderRadius="12px"
									label="Instagram"
								/>
							</OptionalIcons>
						) : null}
					</SocialRightContainer>
					<MoreIcon
						component={ArrowForwardIosIcon}
						onClick={() => setDisplayAllSocial(!displayAllSocial)}
					/>
				</HeaderContainer>
				<RightNavUl>
					<NavBarButton
						link="/background"
						icon={EmojiPeopleIcon}
						text="Background"
					/>
					<NavBarButton link="/work" icon={CodeIcon} text="Work" />
					<NavBarButton
						link="/freetime"
						icon={SportsSoccerIcon}
						text="Free"
					/>
				</RightNavUl>
			</Wrapper>
			<MenuIconStyled
				component={MenuIcon}
				onClick={() => setIsSidebarHidden(!isSidebarHidden)}
			/>
		</NavStyled>
	);
}
