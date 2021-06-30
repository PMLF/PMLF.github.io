import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Landing from "../Landing";
import Header from "../Header";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CodeIcon from '@material-ui/icons/Code';

export default function Routing() {
  return (
    <Router>
      <div>
        <Header>
          <li>
            <Link to="/background"><EmojiPeopleIcon style={{fontSize: 28}}/> Background</Link>
          </li>
          <li>
            <Link to="/work"><CodeIcon style={{fontSize: 28}}/> Work</Link>
          </li>
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
