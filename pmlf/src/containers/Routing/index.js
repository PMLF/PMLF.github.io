import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "../Landing";
import Header from "../Header";
import styled from "styled-components";

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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const MoreIconStyled = styled('div')`
  font-size: 40px;
  height: 60px;
  margin: 0;
  div {
    svg {
      margin: 0 20px;
      &:hover {
        background-color: #444;
        transform: scale(1.3);
        border-radius: 6px;
      }
    }
  }
`

export default function Routing() {
  return (
    <Router>
      <div>
        <Header>
          <div className="header-container">
            <NavBarImg src={Signature} alt="Signature" />
            <div className="social-media-md">
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
            </div>
            <div className="social-media-lg">
              <SocialMediaButton
                href={CvDocument}
                icon={CvIcon}
                colorArray={["#CD0001", "#CD4F44"]}
                borderRadius="6px"
                label="Download CV"
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
            </div>
            <MoreIconStyled>
              <SvgIcon
                className="moreIcon"
                component={ArrowDropDownIcon}
                label="More"
              />
            </MoreIconStyled>
          </div>
          <ul>
            <NavBarButton link="/background" icon={EmojiPeopleIcon} text="Background" />
            <NavBarButton link="/work" icon={CodeIcon} text="Work" />
          </ul>
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
