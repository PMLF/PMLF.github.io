import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/*New routes here*/}
          </ul>
        </nav>
        
        <Switch>
          {/*New routes here*/}
          <Route path="/test">
            Test
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
