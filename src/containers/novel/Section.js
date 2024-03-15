import React, { Component } from "react";
import "./Section.scss";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/images/author-novel.jpg";

class Section extends Component {
  truncateDetail = (text, limit) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.slice(0, limit) + "...";
    }
  };
  render() {
    const DetailText = `Tô Ly xuyên việt đến huyền huyễn thế giới, đồng thời
    ngoài ý muốn thành vì nhân vật chính pháo hôi t... Tô Ly
    xuyên việt đến huyền huyễn thế giới, đồng thời ngoài ý
    muốn thành vì nhân vật chính pháo hôi t...Tô Ly xuyên
    việt đến huyền huyễn thế giới, đồng thời ngoài ý muốn
    thành vì nhân vật chính pháo hôi t...`;
    const truncatedDetailText = this.truncateDetail(DetailText, 100);
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <div className="home-section container-fluid mb-4">
          <div className="home-content container">
            <div className="home-title">
              <div className="home-body row align-items-center justify-content-center ">
                <Slider {...settings}>
                  <div class="content text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={img} className="card-img4" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center font-weight-bold pt-3">
                      Phản Phái Tùy Tùng: Nữ Chính, Thỉnh Thận Trọng!
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <span className="department">{truncatedDetailText}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <button
                        type="button"
                        className="btn btn-outline-warning list-inline-item button-card"
                      >
                        Huyền Huyễn
                      </button>
                    </div>
                  </div>
                  <div class="content text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={img} className="card-img4" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center font-weight-bold pt-3">
                      Phản Phái Tùy Tùng: Nữ Chính, Thỉnh Thận Trọng!
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <span className="department">{truncatedDetailText}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <button
                        type="button"
                        className="btn btn-outline-warning list-inline-item button-card"
                      >
                        Huyền Huyễn
                      </button>
                    </div>
                  </div>
                  <div class="content text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={img} className="card-img4" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center font-weight-bold pt-3">
                      Phản Phái Tùy Tùng: Nữ Chính, Thỉnh Thận Trọng!
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <span className="department">{truncatedDetailText}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <button
                        type="button"
                        className="btn btn-outline-warning list-inline-item button-card"
                      >
                        Huyền Huyễn
                      </button>
                    </div>
                  </div>
                  <div class="content text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={img} className="card-img4" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center font-weight-bold pt-3">
                      Phản Phái Tùy Tùng: Nữ Chính, Thỉnh Thận Trọng!
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <span className="department">{truncatedDetailText}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <button
                        type="button"
                        className="btn btn-outline-warning list-inline-item button-card"
                      >
                        Huyền Huyễn
                      </button>
                    </div>
                  </div>
                  <div class="content text-center">
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={img} className="card-img4" alt=""></img>
                    </div>
                    <div className="d-flex justify-content-center align-items-center font-weight-bold pt-3">
                      Phản Phái Tùy Tùng: Nữ Chính, Thỉnh Thận Trọng!
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <span className="department">{truncatedDetailText}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-1">
                      <button
                        type="button"
                        className="btn btn-outline-warning list-inline-item button-card"
                      >
                        Huyền Huyễn
                      </button>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Section;
