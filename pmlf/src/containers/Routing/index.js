import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "../Landing";
import Header from "../Header";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CodeIcon from '@material-ui/icons/Code';
import NavBarButton from '../../components/NavBarButton'

export default function Routing() {
  return (
    <Router>
      <div>
        <Header>
          <NavBarButton link="/background" icon={EmojiPeopleIcon} text="Background" />
          <NavBarButton link="/work" icon={CodeIcon} text="Work" />
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
