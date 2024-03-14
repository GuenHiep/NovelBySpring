import React, { Component } from "react";
import img from "../../assets/images/1.jpg";

import "./HomeChild5.scss";

class HomeChild5 extends Component {
  truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.slice(0, limit) + "...";
    }
  };

  renderCard = (index) => {
    const sampleText = "Bắt Đầu Hỗn Độn Kiếm Thể, Chế Tạo Bất Hủ Tiên Tộc"; // đổ api vào đây
    const truncatedText = this.truncateText(sampleText, 21);
    const img = require("../../assets/images/1.jpg");

    const sampleTextChild = `Cố Trường Thanh xuyên qua huyền huyễn thế giới, thức
    tỉnh đa tử đa phúc hệ thống, bắt đầu cưới tương lai
    Nữ Đế, mở ra vô địch lộ!Căn cốt không được? 【 đinh!
    Chúc mừng kí chủ con nối dõi sinh ra, thức tỉnh Tử
    Tiêu Thực Lôi Thể, trả về túc chủ Hỗn Độn Kiếm Thể!
    】 Công pháp không được? 【 đinh! Chúc mừng kí chủ
    con nối dõi sinh ra, người mang Chí Tôn tiên cốt,
    trả về kí chủ vô thượng thần thông một quyển! 】
    Không có át chủ bài? 【 đinh! Chúc mừng kí chủ con
    nối dõi sinh ra, người mang Chu Tước huyết mạch,
    khen thưởng kí chủ Ngục Hỏa Chân Phượng tọa kỵ một
    cái! Thực lực có thể so với Đại Đế đỉnh phong! 】 Cứ
    như vậy, bao nhiêu năm sau. "Cái kia Cố gia là
    chuyện gì xảy ra? Tùy tiện một cái gia bộc đều là
    Đại Đế! Ra tới một cái ba tuổi tiểu hài tử, làm sao
    lại có Hồng Trần Tiên thực lực! ?"`; // đổ api vào đây
    const truncatedTextChild = this.truncateText(sampleTextChild, 85);

    return (
      <div key={index} className="col-6">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={img} alt="/#" className="img-component" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a href="#/" className="text-component font-weight-bold">
                  {truncatedText}
                </a>
                <p className="card-text">{truncatedTextChild}</p>
                <div className="list-inline">
                  <p className="card-text list-inline-item">
                    <small className="text-muted">
                      <i className="fas fa-user-edit pr-1"></i>U Thập Thất
                    </small>
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-warning list-inline-item button-card"
                  >
                    Huyền Huyễn
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  };

  renderCards = () => {
    const numberOfCards = 6;

    const cards = [];
    for (let i = 0; i < numberOfCards; i++) {
      cards.push(this.renderCard(i));
    }

    return cards;
  };

  render() {
    return (
      <>
        <div className="containerfluid-5 container-fluid">
          <div className="container-5 container">
            <div className="row content">
              <div className="col-4 row new-post">
                <div className="col-12 title-post d-flex pt-3">
                  <h5>Mới đăng</h5>
                </div>
                <div className=""></div>
              </div>
              <div className="col-8 row no-gutters complete">
                <div className="col-12 title d-flex pt-3">
                  <h5>Mới hoàn thành</h5>
                  <button
                    type="button"
                    class="btn btn-outline-warning border-0 ml-auto"
                  >
                    Xem tất cả
                  </button>
                </div>
                {this.renderCards()}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeChild5;
