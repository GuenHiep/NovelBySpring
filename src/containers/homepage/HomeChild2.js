import React, { Component } from "react";

import "./HomeChild2.scss";
class HomeChild2 extends Component {
  truncateNovel = (text, limit) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.slice(0, limit) + "...";
    }
  };

  truncateDetail = (text, limit) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.slice(0, limit) + "...";
    }
  };

  truncateChapter = (text, limit) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.slice(0, limit) + "...";
    }
  };

  renderUpdateComponent = () => {
    const novelText = "Đại Tần Hoàng Tử, Bắt Đầu Triệu Hoán Tào Chính Thuần";
    const truncatedNovel = this.truncateNovel(novelText, 40);

    const detail = "Hữu Tình Thiên Nhai Nan Bút Mặc";
    const truncatedDetail = this.truncateDetail(detail, 40);

    const chapter = "Chương 533: Có khó khăn tìm giáo sư, không tật xấu đi?";
    const truncatedChapter = this.truncateChapter(chapter, 35);

    const looptable = 10;
    const novel = [];

    for (let i = 0; i < looptable; i++) {
      const isEven = i % 2 === 0;
      const backgroundColor = isEven ? "white" : "#f8f9fa";
      novel.push(
        <tbody key={i} style={{ backgroundColor }}>
          <tr>
            <td>Huyền Huyễn</td>
            <th scope="row">
              <a href="#/">{truncatedNovel}</a>
            </th>
            <td>
              <a href="#/">{truncatedChapter}</a>
            </td>
            <td>{truncatedDetail}</td>
            <td>Vô Ưu</td>
            <td>1 phút trước</td>
          </tr>
        </tbody>
      );
    }

    return novel;
  };
  render() {
    return (
      <>
        <div className="container-2 container p-3">
          <div className="row update">
            <div className="col-12 update-title">
              <h5>Mới cập nhật</h5>
              <button type="button" class="btn btn-outline-warning border-0 ">
                Xem tất cả
              </button>
            </div>

            <div className="col-12">
              <hr></hr>
            </div>
            <table class="table table-striped mt-3">
              {this.renderUpdateComponent()}
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default HomeChild2;
