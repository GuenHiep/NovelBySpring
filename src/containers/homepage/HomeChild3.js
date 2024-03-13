import React, { Component } from "react";
import "./HomeChild3.scss";

import medal1 from "../../assets/images/medal-1.svg";
import medal2 from "../../assets/images/medal-2.svg";
import medal3 from "../../assets/images/medal-3.svg";
import imgbxh from "../../assets/images/bxh.webp";

class HomeChild3 extends Component {
  truncateTopText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    } else {
      return text.slice(0, limit) + "...";
    }
  };
  render() {
    const TopText = "Bắt Đầu Đánh Dấu Hoang Cổ Thánh Thể";
    const truncatedTopText = this.truncateTopText(TopText, 27);

    return (
      <>
        <div className="container-3 container">
          <div className="content row">
            <div className="content-1 col-4">
              <h5>Đọc nhiều tuần</h5>
              <div className="col-12 content-medal1 row">
                <img src={medal1} alt="" className="medal1 mt-2"></img>
                <div className="col content-bxh">
                  <a href="#/" className="title-top font-weight-bold">
                    {truncatedTopText}
                  </a>
                  <hr></hr>
                  <span className="view-bxh">
                    12,345
                    <i class="fas fa-glasses pl-2"></i>
                  </span>
                  <br></br>
                  <span className="author-bxh">
                    <i class="fas fa-user-edit pr-2"></i>j Thần
                  </span>
                  <br></br>
                  <span className="genre-bxh">
                    <i class="fas fa-wallet pr-2"></i>
                    Huyền Huyễn
                  </span>
                </div>
                <div className="col imgbxh">
                  <img src={imgbxh} alt=""></img>
                </div>
              </div>
              <hr></hr>
              <div className="col-12 content-medal2 row">
                <img src={medal2} alt="" className="medal2"></img>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />

              <div className="col-12 content-medal3 row">
                <img src={medal3} alt="" className="medal3"></img>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal4 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal5 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal6 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal7 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal8 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal9 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal10 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
            </div>

            <div className="content-2 col-4">
              <h5>Thịnh hành tuần</h5>
              <div className="col-12 content-medal1 row">
                <img src={medal1} alt="" className="medal1 mt-2"></img>
                <div className="col content-bxh">
                  <a href="#/" className="title-top font-weight-bold">
                    {truncatedTopText}
                  </a>
                  <hr></hr>
                  <span className="view-bxh">
                    12,345
                    <i class="fas fa-glasses pl-2"></i>
                  </span>
                  <br></br>
                  <span className="author-bxh">
                    <i class="fas fa-user-edit pr-2"></i>j Thần
                  </span>
                  <br></br>
                  <span className="genre-bxh">
                    <i class="fas fa-wallet pr-2"></i>
                    Huyền Huyễn
                  </span>
                </div>
                <div className="col imgbxh">
                  <img src={imgbxh} alt=""></img>
                </div>
              </div>
              <hr></hr>
              <div className="col-12 content-medal2 row">
                <img src={medal2} alt="" className="medal2"></img>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />

              <div className="col-12 content-medal3 row">
                <img src={medal3} alt="" className="medal3"></img>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal4 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal5 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal6 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal7 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal8 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal9 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal10 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
            </div>
            <div className="content-3 col-4">
              <h5>Đề cử tuần</h5>
              <div className="col-12 content-medal1 row">
                <img src={medal1} alt="" className="medal1 mt-2"></img>
                <div className="col content-bxh">
                  <a href="#/" className="title-top font-weight-bold">
                    {truncatedTopText}
                  </a>
                  <hr></hr>
                  <span className="view-bxh">
                    12,345
                    <i class="fas fa-glasses pl-2"></i>
                  </span>
                  <br></br>
                  <span className="author-bxh">
                    <i class="fas fa-user-edit pr-2"></i>j Thần
                  </span>
                  <br></br>
                  <span className="genre-bxh">
                    <i class="fas fa-wallet pr-2"></i>
                    Huyền Huyễn
                  </span>
                </div>
                <div className="col imgbxh">
                  <img src={imgbxh} alt=""></img>
                </div>
              </div>
              <hr></hr>
              <div className="col-12 content-medal2 row">
                <img src={medal2} alt="" className="medal2"></img>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />

              <div className="col-12 content-medal3 row">
                <img src={medal3} alt="" className="medal3"></img>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal4 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal5 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal6 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal7 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal8 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal9 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
              <hr style={{ marginTop: "0.4rem", marginBottom: "0.4rem" }} />
              <div className="col-12 content-medal10 row">
                <div className="rank pl-2 pr-2">4</div>
                <div className="col-9 content-bxh">
                  <a href="#/" className="title-bxh">
                    {truncatedTopText}
                  </a>
                </div>
                <div className="col-2 view-bxh">
                  <span className="">591.123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeChild3;
