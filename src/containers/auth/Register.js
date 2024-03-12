import React, { Component } from "react";
import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmpassword: "",
      isShowPassword: false,
      isShowConfirmPassword: false,
      passwordMatchError: false,
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

  handleOnConfirmPassword = (event) => {
    this.setState({
      confirmpassword: event.target.value,
    });
  };

  hanldeShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  hanldeShowHideConfirmPassword = () => {
    this.setState({
      isShowConfirmPassword: !this.state.isShowConfirmPassword,
    });
  };

  handleCheckConfirmPassword = () => {
    const { password, confirmpassword } = this.state;

    if (password === confirmpassword) {
      console.log("Register Success");
    } else {
      console.log("Password does not match");
    }
  };

  render() {
    return (
      <>
        <div className="register-background">
          <div className="register-container">
            <div className="register-content row">
              <div className="col-12 text-center text-register">Register</div>
              <div className="col-12 form-group register-input">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  value={this.state.username}
                  onChange={(event) => this.handleOnChangeUsername(event)}
                />
              </div>

              <div className="col-12 form-group register-input">
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
              <div className="col-12 form-group register-input">
                <label>Confirm Password</label>
                <div className="custom-input-password">
                  <input
                    type={
                      this.state.isShowConfirmPassword ? "text" : "password"
                    }
                    className="form-control"
                    placeholder="Enter your confirm password"
                    value={this.state.confirmpassword}
                    onChange={(event) => this.handleOnConfirmPassword(event)}
                  />
                  <span onClick={() => this.hanldeShowHideConfirmPassword()}>
                    <i
                      className={
                        this.state.isShowConfirmPassword
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
                  className="btn-register btn-outline"
                  onClick={() => this.handleCheckConfirmPassword()}
                >
                  Register
                </button>
                <div className="col-12 text-center mt-3 Login">
                  <span className="no-accountp-1">
                    Have an account?
                    <div className="Login p-1">
                      <a href="/Login">Login here</a>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
