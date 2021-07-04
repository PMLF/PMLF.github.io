import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "../Landing";
import Header from "../Header";

// Buttons
import NavBarButton from '../../components/NavBarButton'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CodeIcon from '@material-ui/icons/Code';

// Signature
import NavBarImg from "../../components/NavBarImg/NavBarImg";
import Signature from '../../images/signature_white.svg'

// Social media
import { SvgIcon } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import InstagramIcon from '@material-ui/icons/Instagram';
import SpotifyIcon from '../../images/spotify.svg'
import CvIcon from '../../images/cv_icon_white.svg'

export default function Routing() {
  return (
    <Router>
      <div>
        <Header>
          <div>
            <NavBarImg src={Signature} alt="Signature" />
            <SvgIcon component={LinkedInIcon} />
            <SvgIcon component={GitHubIcon} />
            <SvgIcon component={AlternateEmailIcon} />
            <SvgIcon component={InstagramIcon} />
            <img src={SpotifyIcon} alt="Spotify icon" />
            <img src={CvIcon} alt="CV icon" />
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
