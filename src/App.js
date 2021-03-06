import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CardsetEdit from "./CardsetEdit";
import CardsetAnswer from "./CardsetAnswer";
import NewCardSet from "./NewCardSet";
import NoMatch from "./NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosApiInstance from "axios";
// import {Link, IndexRedirect} from "react-router";
// import {Link, IndexRedirect} from "react-router";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/set/yours/:urlString/edit" component={CardsetEdit} />
            <Route path="/set/yours/:urlString/" component={CardsetAnswer} />
            <Route path="/set/public/:urlString/" component={CardsetAnswer} />
            <Route path="/new" component={NewCardSet} />
            {/* <Redirect from="/" to="/flashcards/#" /> */}
            <Route path="*" component={App}>
              <Redirect to="/" />
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
