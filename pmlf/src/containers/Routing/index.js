import React, {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "../Landing";
import Header from "../Header";
import styled from "styled-components";
import { darkTheme } from "../../themes";

// Buttons
import NavBarButton from '../../components/NavBarButton'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CodeIcon from '@material-ui/icons/Code';

// Signature
import NavBarImg from "../../components/NavBarImg/NavBarImg";
import Signature from '../../images/signature_white.svg'

// Social media
import SvgIcon from "@material-ui/core/SvgIcon";
import SocialMediaButton from "../../components/SocialMediaButton/SocialMediaButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import InstagramIcon from '@material-ui/icons/Instagram';
import SpotifyIcon from '../../images/spotify.svg'
import CvIcon from '../../images/cv_icon_white.svg'
import CvDocument from '../../assets/CV_PEDROFONSECA_en_2021.pdf'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu'

const HeaderContainer = styled('div')`
  color: white;
  display: flex;
  align-items: center;
  margin-left: 5%;
`

const SocialLeftContainer = styled('div')`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: ${darkTheme.breakpoint.md}) {
    display:none;
  }
`

const SocialRightContainer = styled('div')`
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
`

const OptionalIcons = styled('div')`
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
`

const MoreIcon = styled(SvgIcon)`
  margin: 0 16px;
  padding: 4px;
  &:hover {
    background-color: #444;
    transform: rotate(90deg);
    transition: all 0.3s;
    border-radius: 6px;
  }
  @media only screen and (min-width: ${darkTheme.breakpoint.lg}) {
    display:none!important;
  }
  @media only screen and (max-width: ${darkTheme.breakpoint.md}) {
    display:none!important;
  }
`

const RightNavUl = styled('ul')`
  @media only screen and (max-width: ${darkTheme.breakpoint.md}) {
    display:none!important;
    background-color: red;
  }
`

export default function Routing() {
  const [displayAllSocial, setDisplayAllSocial] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Router>
      <div>
        <Header>
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
              {
                displayAllSocial
                  || (
                    window.innerWidth > darkTheme.breakpoint.lg.slice(0, -2)
                    && window.innerWidth > darkTheme.breakpoint.md.slice(0, -2)
                    )
                  ? <OptionalIcons >
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
                </OptionalIcons>
                  : null
              }
            </SocialRightContainer>
            <MoreIcon
              component={ArrowForwardIosIcon}
              onClick={() => setDisplayAllSocial(!displayAllSocial)}
            />
          </HeaderContainer>
          <RightNavUl>
            <NavBarButton link="/background" icon={EmojiPeopleIcon} text="Background" />
            <NavBarButton link="/work" icon={CodeIcon} text="Work" />
          </RightNavUl>
          <MenuIcon
          component={MenuIcon}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        </Header>
        
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
