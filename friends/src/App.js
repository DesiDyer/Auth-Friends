import React from "react";

import { Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <nav className="ui menu">
        <Link className="item" to="/login">
          Login
        </Link>
        <Link className="item" to="friends-list">
          Friends List
        </Link>
      </nav>
      <Switch>
        <PrivateRoute exact path="/friends-list" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
