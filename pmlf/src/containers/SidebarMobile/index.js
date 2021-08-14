import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../themes";

// Buttons
import NavBarButton from "../../components/NavBarButton";
import SocialMediaButton from "../../components/SocialMediaButton/SocialMediaButton";

// Documents
import CvDocument from "../../assets/CV_PEDROFONSECA_en_2021.pdf";

// Icons
import CloseIcon from "@material-ui/icons/Close";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import CodeIcon from "@material-ui/icons/Code";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import InstagramIcon from "@material-ui/icons/Instagram";
import SpotifyIcon from "../../images/spotify.svg";
import CvIcon from "../../images/cv_icon_white.svg";

const SidebarContainer = styled("div")`
	@media only screen and (min-width: calc(${darkTheme.breakpoint.md} + 1px)) {
		display: none;
	}
`;

const SidebarStyled = styled("div")`
	height: 100%;
	width: 50%;
	background-color: ${darkTheme.colors.greyDarker};
	position: fixed;
	right: 0;
	top: 0;
	z-index: 10;
	padding: 80px 40px 0 40px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	-moz-box-shadow: 0px 0px 30px 0px rgba(20, 20, 20, 0.7);
	-webkit-box-shadow: 0px 0px 30px 0px rgba(20, 20, 20, 0.7);
	box-shadow: px 0px 30px 0px rgba(20, 20, 20, 0.7);

	& > li,
	& > a {
		margin: 10px 0;
	}

	& > a {
		display: flex;
		flex-direction: row;
		align-items: center;
		svg,
		img {
			margin: 0 20px 0 0;
		}
		p {
			position: static;
			transform: none;
			display: block;
			text-align: left;
			font-size: 16px;
		}
	}
`;

const Backdrop = styled("div")`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: ${darkTheme.colors.greyDark};
	opacity: 0.6;
	z-index: 9;
`;

const CloseSidebar = styled(CloseIcon)`
	color: white;
	&& {
		font-size: 40px;
	}
	position: absolute;
	z-index: 11;
	right: 30px;
	top: 30px;
`;

const HrStyled = styled("hr")`
	margin: 20px 0;
	width: 100%;
`;

export default function SidebarMobile({ hidden, hiddenToggle }) {
	return (
		<SidebarContainer hidden={hidden}>
			<CloseSidebar onClick={() => hiddenToggle()} />
			<Backdrop onClick={() => hiddenToggle()} />
			<SidebarStyled>
				<NavBarButton
					link="/background"
					icon={EmojiPeopleIcon}
					text="Background"
				/>
				<NavBarButton link="/work" icon={CodeIcon} text="Work" />
				<HrStyled />
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
				<SocialMediaButton
					href={CvDocument}
					icon={CvIcon}
					colorArray={["#CD0001", "#CD4F44"]}
					borderRadius="6px"
					label="CV"
					alt="CV download link"
					download="CV_PEDROFONSECA_en_2021.pdf"
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
					href="https://www.instagram.com/pmlfonseca/"
					icon={InstagramIcon}
					colorArray={["#3E6BC9", "#B63A9D", "#FC5245", "#FEDA55"]}
					borderRadius="12px"
					label="Instagram"
				/>
			</SidebarStyled>
		</SidebarContainer>
	);
}
