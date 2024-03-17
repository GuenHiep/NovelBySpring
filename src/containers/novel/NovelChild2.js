import React, { Component } from "react";
import "./NovelChild2.scss";
import Section from "./Section";
import RangeSlider from "./RangeSlider";

import hearth from "../../assets/images/hearth.png";
import like from "../../assets/images/like.svg";
import haha from "../../assets/images/haha.png";
import sad from "../../assets/images/sad.png";
import angry from "../../assets/images/angry.svg";
import avatar from "../../assets/images/avatar.webp";
import reader from "../../assets/images/user.webp";

class NovelChild2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: "Giới thiệu",
    };
  }

  handleButtonClick = (buttonName) => {
    this.setState({
      activeButton: buttonName,
    });
  };

  renderIntroduce = () => {
    return (
      <div className="introduce">
        <p className="text-introduce p-2 pt-4">
          Là Đan Đế trọng sinh? Là dung hợp linh hồn? Bị đánh cắp linh căn, linh
          huyết, linh cốt ba không thiếu niên — — Long Trần, nương tựa theo
          trong trí nhớ luyện đan thần thuật, tu hành thần bí công pháp Cửu Tinh
          Bá Thể Quyết, đẩy ra sương mù dày đặc, giải khai cái bẫy động trời.
          <br />
          <br />
          Tay cầm thiên địa càn khôn, chân đạp nhật nguyệt tinh thần, thông đồng
          các loại mỹ nữ, trấn áp ác quỷ tà thần.
          <br />
          <br /> Giang hồ truyền văn: Long Trần vừa đến, địa hống thiên khiếu.
          Long Trần vừa ra, quỷ khóc thần khóc.
        </p>

        <table class="table border-bottom mb-4 mt-5">
          <tbody>
            <tr>
              <td
                class="align-middle font-weight-bold"
                style={{ width: "130px;" }}
              >
                Cảm xúc
              </td>
              <td class="align-middle">
                <ul class="list-unstyled m-0 d-flex flex-wrap">
                  <li class="d-flex align-items-center mr-4">
                    <img
                      src={hearth}
                      class="svg-icon icon-react-love mr-2"
                      alt=""
                    ></img>
                    10517
                  </li>{" "}
                  <li class="d-flex align-items-center mr-4">
                    <img
                      src={like}
                      alt=""
                      class="svg-icon icon-react-like mr-2"
                    ></img>
                    12785
                  </li>{" "}
                  <li class="d-flex align-items-center mr-4">
                    <img
                      src={haha}
                      alt=""
                      class="svg-icon icon-react-fun mr-2"
                    ></img>
                    2038
                  </li>{" "}
                  <li class="d-flex align-items-center mr-4">
                    <img
                      alt=""
                      src={sad}
                      class="svg-icon icon-react-sad mr-2"
                    ></img>
                    28
                  </li>{" "}
                  <li class="d-flex align-items-center mr-4">
                    <img
                      src={angry}
                      alt=""
                      class="svg-icon icon-react-angry mr-2"
                    ></img>
                    18
                  </li>{" "}
                </ul>
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold" style={{ width: "130px;" }}>
                Đề cử
              </td>
              <td>
                <div class="media">
                  <div class="media-body">
                    <div class="d-flex align-items-center mb-0">
                      <i class="svg-icon icon-flower mr-3 ml-2"></i> 61
                    </div>
                  </div>{" "}
                  <div class="font-weight-bold pl-3">No. 208</div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="font-weight-bold" style={{ width: "130px" }}>
                Chương mới
              </td>
              <td>
                <ul class="list-unstyled m-0">
                  <li class="media">
                    <div class="media-body">
                      <a href="#/">Chương 6025: Cửu Lê phong vân</a>
                    </div>
                    <div class="pl-3">2 giờ trước</div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  renderRating = () => {
    return (
      <>
        <div className="rating p-2 container mt-4">
          <div className="row row-1 p-2">
            <div className="text-rating col-4 font-weight-bold">
              Tính cách nhân vật
            </div>
            <div className="range-rating col-8 no-gutters">
              <RangeSlider />
            </div>
          </div>
          <div className="row row-2 p-2">
            <div className="text-rating col-4 font-weight-bold">
              Nội dung cốt truyện
            </div>
            <div className="range-rating col-8 no-gutters">
              <RangeSlider />
            </div>
          </div>
          <div className="row row-3 p-2">
            <div className="text-rating col-4 font-weight-bold">
              Bố cục thế giới
            </div>
            <div className="range-rating col-8 no-gutters">
              <RangeSlider />
            </div>
          </div>
          <div className="col-12 row no-gutters cmt">
            <div className="box-rating  rating-input col-12">
              <textarea
                placeholder="Đánh giá của bạn về truyện này..."
                className=""
              />
              <i class="fas fa-paper-plane btn btn-secondary rounded-pill"></i>
            </div>
          </div>
        </div>
        <div className="comment d-flex justify-content-end pt-4">
          <select class="custom-select w-auto ml-auto">
            <option value="like_count">Lượt thích</option>{" "}
            <option value="id">Mới nhất</option>
          </select>
        </div>
        <hr></hr>
        {/* cmt */}
      </>
    );
  };
  renderChapter = () => {
    const chapters = [
      "Chương 1: Tỉnh lại thấy chi nữ ma đầu",
      "Chương 2: Second chapter content",
    ];
    return (
      <>
        <div className="container chapter p-2 mt-4">
          <div className="title-chapter">
            <h5>Danh sách chương</h5>
          </div>
          <div className="body-chapter row no-gutters">
            <div className="col-12 content-chapter row">
              {chapters.map((chapter, index) => (
                <div key={index} className="col-6 border-bottom-dashed">
                  <p>{chapter}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  renderComment = () => {
    return (
      <>
        <div className="d-flex col-12 pt-4">
          <div className="value-cmt d-flex justify-content-start align-items-center col-6">
            100 Bình luận
          </div>
          <div className="filter d-flex justify-content-end col-6">
            <select class="custom-select w-auto ml-auto">
              <option value="like_count">Mới nhất</option>{" "}
              <option value="id">Cũ nhất</option>
              <option value="id">Lượt thích</option>
            </select>
          </div>
        </div>
        <hr></hr>
        <div className="col-12 row no-gutters comment pt-3">
          <div className="avt-reader col-2">
            <img alt="" src={reader} className="rounded-pill "></img>
          </div>
          <div className="col-10 row cmt-reader">
            <div className="box-cmt col-12">
              <textarea placeholder="Bình luận của bạn..."></textarea>
              <i class="fas fa-paper-plane btn btn-secondary rounded-pill"></i>
            </div>
          </div>
        </div>
        <hr></hr>
      </>
    );
  };

  renderContent = () => {
    const { activeButton } = this.state;
    switch (activeButton) {
      case "Giới thiệu":
        return this.renderIntroduce();
      case "Đánh giá":
        return this.renderRating();
      case "D.s chương":
        return this.renderChapter();
      case "Bình luận":
        return this.renderComment();

      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <div className="container-novel2 container">
          <div className="row no-gutters">
            <div className="option pl-3">
              <button
                type="button"
                className={`btn btn-outline-secondary rounded-pill mr-3
                    ${
                      this.state.activeButton === "Giới thiệu" ? "active" : ""
                    }`}
                onClick={() => this.handleButtonClick("Giới thiệu")}
              >
                Giới thiệu
              </button>
              <button
                type="button"
                className={`btn btn-outline-secondary rounded-pill mr-3
                    ${this.state.activeButton === "Đánh giá" ? "active" : ""}`}
                onClick={() => this.handleButtonClick("Đánh giá")}
              >
                Đánh giá
              </button>
              <button
                type="button"
                className={`btn btn-outline-secondary rounded-pill mr-3
                    ${
                      this.state.activeButton === "D.s chương" ? "active" : ""
                    }`}
                onClick={() => this.handleButtonClick("D.s chương")}
              >
                D.s chương
              </button>
              <button
                type="button"
                className={`btn btn-outline-secondary rounded-pill mr-3
                    ${this.state.activeButton === "Bình luận" ? "active" : ""}`}
                onClick={() => this.handleButtonClick("Bình luận")}
              >
                Bình luận
              </button>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-12 body-option row">
              <div className="content col-8">{this.renderContent()}</div>
              <div className="author-novel col-4">
                <div className="d-flex justify-content-center pt-4">
                  <div className="avatar">
                    <img src={avatar} alt="" className="rounded-pill"></img>
                    <p className="name text-center font-weight-bold pt-4">
                      Vô ưu
                    </p>
                  </div>
                </div>
                <div className="achievement row text-center d-flex justify-content-center">
                  <div className="col-4">
                    <i class="fas fa-book pb-3"></i>
                    <p>Số truyện</p>
                    <p className="font-weight-bold">710</p>
                  </div>
                  <div className="col-4 ">
                    <i class="fas fa-swatchbook pb-3"></i>
                    <p>Số chương</p>
                    <p className="font-weight-bold">328k</p>
                  </div>{" "}
                  <div className="col-4">
                    <i class="fas fa-level-up-alt  pb-3"></i>
                    <p>Cấp</p>
                    <p className="font-weight-bold">3</p>
                  </div>
                </div>
                <hr></hr>
                <Section />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NovelChild2;
