import React, { Component } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenGenre: false,
      isOpenRank: false,
    };
    this.timeoutId = null;
  }

  handleMouseEnterGenre = () => {
    this.setState({
      isOpenGenre: true,
      isOpenRank: false,
    });
  };

  handleMouseLeaveGenre = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        isOpenGenre: false,
      });
    }, 200);
  };

  handleMouseEnterRank = () => {
    this.setState({
      isOpenRank: true,
      isOpenGenre: false,
    });
  };

  handleMouseLeaveRank = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        isOpenRank: false,
      });
    }, 200);
  };

  handleMouseEnterList = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  handleAttributeClick = (attribute) => {
    console.log(`Selected attribute: ${attribute}`);
  };

  toggleDropdownGenre = () => {
    this.setState((prevState) => ({
      isOpenGenre: !prevState.isOpenGenre,
    }));
  };

  toggleDropdownRank = () => {
    this.setState((prevState) => ({
      isOpenRank: !prevState.isOpenRank,
    }));
  };

  handleItemClick = (item) => {
    console.log(`Clicked ${item}`);
  };

  render() {
    const { isOpenGenre, isOpenRank } = this.state;

    return (
      <>
        <div className="container-fluid header-container">
          <div className="container navbar">
            <div className="col-12 row align-items-center">
              <div className="col-1 logo">
                <img
                  src={logo}
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                  className="rounded-pill"
                ></img>
              </div>
              <div
                className="col-2 genre"
                onMouseEnter={this.handleMouseEnterGenre}
                onMouseLeave={this.handleMouseLeaveGenre}
              >
                <button
                  id="dropdownDefaultButton"
                  onClick={this.toggleDropdownGenre}
                  type="button"
                  className="btn btn-light font-weight-bold text-smaller text-center"
                >
                  <i className="fas fa-bars pr-2"></i>
                  Thể loại
                </button>
                {isOpenGenre && (
                  <div
                    id="dropdown"
                    className=" mt-1 bg-white rounded-lg shadow pl-3"
                    style={{
                      position: "absolute",
                      top: "100%",
                      width: "250px",
                    }}
                  >
                    <div
                      className="py-2 text-sm "
                      style={{ display: "flex", width: "100%" }}
                    >
                      <a
                        href="#/"
                        onClick={() => this.handleItemClick("Dashboard")}
                        className="text-dark custom-link"
                        style={{ flex: 1 }}
                      >
                        Tất cả
                      </a>
                      <a
                        href="#/"
                        onClick={() => this.handleItemClick("Settings")}
                        className="text-dark"
                        style={{ flex: 1 }}
                      >
                        Kiếm hiệp
                      </a>
                    </div>
                    <div
                      className="py-2 text-sm "
                      style={{ display: "flex", width: "100%" }}
                    >
                      <a
                        href="#/"
                        onClick={() => this.handleItemClick("Earnings")}
                        className="text-dark"
                        style={{ flex: 1 }}
                      >
                        Tiên hiệp
                      </a>
                      <a
                        href="#/"
                        onClick={() => this.handleItemClick("Sign out")}
                        className="text-dark"
                        style={{ flex: 1 }}
                      >
                        Huyền bí
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="col-2 rank"
                onMouseEnter={this.handleMouseEnterRank}
                onMouseLeave={this.handleMouseLeaveRank}
              >
                <button
                  id="dropdownDefaultButton"
                  onClick={this.toggleDropdownRank}
                  type="button"
                  className="btn btn-light font-weight-bold text-smaller text-center"
                >
                  Bảng xếp hạng
                </button>
                {isOpenRank && (
                  <div
                    id="dropdown"
                    className=" mt-1 bg-white rounded-lg shadow pl-3"
                    style={{
                      position: "absolute",
                      top: "100%",
                      width: "250px",
                    }}
                  >
                    <div
                      className="py-2 text-sm "
                      style={{ display: "flex", width: "100%" }}
                    >
                      <a
                        href="#/"
                        onClick={() => this.handleItemClick("Dashboard")}
                        className="text-dark custom-link"
                        style={{ flex: 1 }}
                      >
                        Thịnh hành
                      </a>
                      <a
                        href="#/"
                        onClick={() => this.handleItemClick("Settings")}
                        className="text-dark"
                        style={{ flex: 1 }}
                      >
                        Đề cử
                      </a>
                    </div>
                    <div
                      className="py-2 text-sm "
                      style={{ display: "flex", width: "100%" }}
                    >
                      <a
                        href="#/"
                        onClick={() => this.handleItemClick("Earnings")}
                        className="text-dark"
                        style={{ flex: 1 }}
                      >
                        Yêu thích
                      </a>
                      <a
                        href="#/"
                        onClick={() => this.handleItemClick("Sign out")}
                        className="text-dark"
                        style={{ flex: 1 }}
                      >
                        Thảo luận
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search col-3 col form-group search-input">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Tìm kiếm" className="pl-3" />
              </div>
              <div className="col-2 post text-right">
                <div>Đăng truyện</div>
              </div>
              <div className="col-2 Login text-center">
                <a href="/login">
                  Đăng nhập
                  <i class="fas fa-user pl-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
