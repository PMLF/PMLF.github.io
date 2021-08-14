import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import Header from "../Header";
import styled from "styled-components";

// Buttons
import NavBarButton from "../../components/NavBarButton";
import SocialMediaButton from "../../components/SocialMediaButton/SocialMediaButton";

// Documents
import CvDocument from "../../assets/CV_PEDROFONSECA_en_2021.pdf";

// Icons
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import CodeIcon from "@material-ui/icons/Code";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import InstagramIcon from "@material-ui/icons/Instagram";
import SpotifyIcon from "../../images/spotify.svg";
import CvIcon from "../../images/cv_icon_white.svg";

// Sidebar
import SidebarMobile from "../SidebarMobile";

const HrStyled = styled("hr")`
	margin: 20px 0;
	width: 100%;
`;

export default function Routing() {
	const [displayAllSocial, setDisplayAllSocial] = useState(false);
	const [isSidebarHidden, setIsSidebarHidden] = useState(true);

	return (
		<Router>
			<div>
				<Header
					displayAllSocial={displayAllSocial}
					setDisplayAllSocial={setDisplayAllSocial}
					isSidebarHidden={isSidebarHidden}
					setIsSidebarHidden={setIsSidebarHidden}
				/>
				<SidebarMobile
					hidden={isSidebarHidden}
					hiddenToggle={() => setIsSidebarHidden(true)}
				>
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
						colorArray={[
							"#3E6BC9",
							"#B63A9D",
							"#FC5245",
							"#FEDA55",
						]}
						borderRadius="12px"
						label="Instagram"
					/>
				</SidebarMobile>

				<Switch>
					{/*New routes here*/}
					<Route path="/">
						<Landing />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
