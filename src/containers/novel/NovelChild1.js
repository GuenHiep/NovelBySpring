import React, { Component } from "react";

import Rating from "./Rating";
import img_novel from "../../assets/images/novel.jpg";

import "./NovelChild1.scss";
class NovelChild1 extends Component {
  render() {
    return (
      <>
        <div className="container-fluid container-main">
          <div className="container container-novel">
            <div className="row no-gutters novel-content">
              <div className="col-12 pt-4">
                <div className="content d-flex">
                  <div className="img pl-4 pr-4">
                    <img src={img_novel} alt="" className="img-novel"></img>
                  </div>
                  <div className="body">
                    <a href="#/" class="text-tilte font-weight-bold">
                      Cửu Tinh Bá Thể Quyết
                    </a>
                    <ul class="list-unstyled pt-3">
                      <li class="d-inline-block border border-secondary px-3 py-1 rounded-pill text-secondary mr-2 mb-2">
                        <a href="#/" class="text-secondary">
                          {" "}
                          Bình Phàm Ma Thuật Sư{" "}
                        </a>
                      </li>
                      <li class="d-inline-block border border-primary px-3 py-1 rounded-pill text-primary mr-2 mb-2">
                        <a href="#/" class="text-primary">
                          Huyền Huyễn
                        </a>
                      </li>
                      <li class="d-inline-block border border-success px-3 py-1 rounded-pill text-success mr-2 mb-2">
                        <a href="#/" class="text-success">
                          Đông Phương Huyền Huyễn
                        </a>
                      </li>
                      <li class="d-inline-block border border-danger px-3 py-1 rounded-pill text-danger mr-2 mb-2">
                        {" "}
                        Đang ra{" "}
                      </li>
                    </ul>
                    <ul class="list-unstyled d-flex pt-2">
                      <li class="mr-5">
                        <div class="font-weight-bold h4 mb-1 font">6024</div>
                        <div>Chương</div>
                      </li>
                      <li class="mr-5">
                        <div class="font-weight-bold h4 mb-1 font">14</div>
                        <div>Chương/tuần</div>
                      </li>
                      <li class="mr-5">
                        <div class="font-weight-bold h4 mb-1 font">14.0M</div>
                        <div>Lượt đọc</div>
                      </li>
                      <li class="mr-5">
                        <div
                          id="bookmarkedValue"
                          class="font-weight-bold h4 mb-1 font"
                        >
                          2546
                        </div>
                        <div>Cất giữ</div>
                      </li>
                    </ul>
                    <div className="rating pb-2">
                      <Rating />
                    </div>
                    <ul class="list-unstyled pt-3 d-flex align-items-center">
                      <li
                        class="d-inline-block  btn btn-primary px-3 py-1 rounded-pill mr-4 mb-2 d-flex align-items-center button-1"
                        style={{ height: "50px" }}
                      >
                        <a
                          href="#/"
                          class="text-white"
                          style={{ textDecoration: "none" }}
                        >
                          <i class="fas fa-glasses pr-1"></i> Đọc truyện{" "}
                        </a>
                      </li>
                      <li
                        class="d-inline-block  btn btn-secondary px-3 py-1 rounded-pill mr-4 mb-2 d-flex align-items-center button-2"
                        style={{ height: "50px" }}
                      >
                        <a
                          href="#/"
                          class="text-white"
                          style={{ textDecoration: "none" }}
                        >
                          <i class="fa fa-bookmark pr-2"></i>
                          Đánh dấu{" "}
                        </a>
                      </li>
                      <li
                        class="d-inline-block  btn btn-success px-3 py-1 rounded-pill mb-2 d-flex align-items-center button-3"
                        style={{ height: "50px" }}
                      >
                        <a
                          href="#/"
                          class="text-white"
                          style={{ textDecoration: "none" }}
                        >
                          <i class="fa fa-thumbs-up pr-2"></i>
                          Đề cử{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NovelChild1;
