import React, { Component } from "react";
import "./Login.scss";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  hanldeShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  handleRegister = () => {
    this.props.history.push("/Register");
  };

  handleLogin = () => {
    alert("aloha");
  };

  render() {
    return (
      <>
        <div className="login-background">
          <div className="login-container">
            <div className="login-content row">
              <div className="col-12 text-center text-login">Login</div>
              <div className="col-12 form-group login-input">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  value={this.state.username}
                  onChange={(event) => this.handleOnChangeUsername(event)}
                />
              </div>

              <div className="col-12 form-group login-input">
                <label>Password</label>
                <div className="custom-input-password">
                  <input
                    type={this.state.isShowPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={(event) => this.handleOnChangePassword(event)}
                  />
                  <span onClick={() => this.hanldeShowHidePassword()}>
                    <i
                      className={
                        this.state.isShowPassword
                          ? "far fa-eye"
                          : "far fa-eye-slash"
                      }
                    ></i>
                  </span>
                </div>
              </div>
              <div class="col">
                <label>Gender</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                />
              </div>
              <div class="col">
                <label>Birthday</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              <div className="col-12 pt-3">
                <button
                  className="btn-login btn-outline"
                  onClick={() => this.handleLogin()}
                >
                  Login
                </button>
              </div>
              <div className="col-12">
                <span className="forgot-password">Forgot your password?</span>
              </div>
              <div className="col-12 text-center mt-3">
                <span className="text-other-login">Or Login with: </span>
              </div>
              <div className="col-12 social-login">
                <i className="fab fa-google-plus-g google"></i>
                <i className="fab fa-facebook-f facebook"></i>
              </div>
              <div className="col-12 text-center mt-3 Register">
                <span className="no-accountp-1">
                  No account?
                  <div className="Register p-1">
                    <a href="/Register">Register</a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
