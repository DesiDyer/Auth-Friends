import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friends-list");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="ui six column centered grid">
          <div className="column">
            <form className="ui form" onSubmit={this.login}>
              <div className="field">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
                />
              </div>

              <button className="ui button">Log in</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
