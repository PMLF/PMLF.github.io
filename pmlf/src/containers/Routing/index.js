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

export default function Routing() {
  return (
    <Router>
      <div>
        <Header>
          <NavBarImg src={Signature} alt="Signature" />
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
