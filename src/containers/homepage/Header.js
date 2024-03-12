import React, { Component } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAttributesVisible: false,
      isAttributesRankVisible: false,
    };
    this.attributesList = [
      "Tất cả",
      "Kiếm hiệp",
      "Tiên hiệp",
      "Huyền bí",
      "Đô thị",
      "Kỳ ảo",
      "Đồng nhân",
      "Light novel",
    ];

    this.attributesRankList = ["Thịnh hành", "Đề cử", "Yêu thích", "Thảo luận"];
    this.timeoutId = null;
  }

  handleMouseEnterAttributes = () => {
    this.setState({
      isAttributesVisible: true,
      isAttributesRankVisible: false,
    });
  };

  handleMouseLeaveAttributes = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        isAttributesVisible: false,
      });
    }, 200);
  };

  handleMouseEnterRank = () => {
    this.setState({
      isAttributesRankVisible: true,
      isAttributesVisible: false,
    });
  };

  handleMouseLeaveRank = () => {
    this.timeoutId = setTimeout(() => {
      this.setState({
        isAttributesRankVisible: false,
      });
    }, 200);
  };

  handleMouseEnterAttributesList = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  handleAttributeClick = (attribute) => {
    console.log(`Selected attribute: ${attribute}`);
  };

  handleMouseEnterRankList = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  handleAttributeRankClick = (attribute) => {
    console.log(`Selected rank attribute: ${attribute}`);
  };

  renderAttributesList = () => {
    return (
      <div
        className="attributes-container"
        onMouseEnter={this.handleMouseEnterAttributesList}
      >
        {this.attributesList.map((attribute, index) => (
          <div key={index} onClick={() => this.handleAttributeClick(attribute)}>
            {attribute}
          </div>
        ))}
      </div>
    );
  };

  renderAttributesRankList = () => {
    return (
      <div
        className="attributes-container"
        onMouseEnter={this.handleMouseEnterRankList}
      >
        {this.attributesRankList.map((attribute, index) => (
          <div
            key={index}
            onClick={() => this.handleAttributeRankClick(attribute)}
          >
            {attribute}
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="header-container container-fluid">
          <div className="container">
            <div className="row row align-items-center">
              <div className="col-1 logo">
                <img src={logo} className="logo" alt="logo"></img>
              </div>
              <div
                className="col-2 genre text-center"
                onMouseEnter={this.handleMouseEnterAttributes}
                onMouseLeave={this.handleMouseLeaveAttributes}
              >
                <button
                  type="button"
                  className="btn btn-light font-weight-bold text-smaller text-center"
                >
                  <i className="fas fa-bars pr-2"></i>
                  Thể loại
                </button>
                {this.state.isAttributesVisible && (
                  <div className="custom-card text-left">
                    <div className="card-body">
                      {this.renderAttributesList()}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="col-2 rank text-left"
                onMouseEnter={this.handleMouseEnterRank}
                onMouseLeave={this.handleMouseLeaveRank}
              >
                <button
                  type="button"
                  className="btn btn-light font-weight-bold text-smaller"
                >
                  Bảng xếp hạng
                </button>
                {this.state.isAttributesRankVisible && (
                  <div className="custom-card-rank">
                    <div className="card-body card-rank">
                      {this.renderAttributesRankList()}
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
