import "./Blog.css";
import one from "./assets/blog01.png";
import two from "./assets/blog02.png";
import three from "./assets/blog03.png";
import four from "./assets/blog04.png";
import five from "./assets/blog05.png";
const Blog = () => {
  return (
    <div className="blog">
      <h1 className="z">
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className="blogs">
        <div className="baako">
          <img src={one} alt="kjljS" />
          <div>
            <small>Sep 26, 2021</small>
            <h1>GPT-3 and Open AI is the future. Let us explore how it is?</h1>
            <div className="pl">Read Full Article</div>
          </div>
        </div>
        <div className="meinu">
          <div className=" meinsa ">
            <img src={two} alt="" />
            <div>
              <small style={{ marginLeft: "20px" }}>Sep 26, 2021</small>
              <h1 style={{ marginLeft: "20px" }}>
                GPT-3 and Open AI is the future. Let us explore how it is?
              </h1>
              <div style={{ marginLeft: "20px", paddingBottom: "50px" }}>
                Read Full Article
              </div>
            </div>
          </div>
          <div className=" meinsa">
            <img src={three} alt="" />
            <div>
              <small style={{ marginLeft: "20px" }}>Sep 26, 2021</small>
              <h1 style={{ marginLeft: "20px" }}>
                GPT-3 and Open AI is the future. Let us explore how it is?
              </h1>
              <div className="lal" style={{ marginLeft: "20px" }}>
                Read Full Article
              </div>
            </div>
          </div>
        </div>
        <div className="meinu">
          <div className=" meinsa">
            <img src={four} alt="" />
            <div>
              <small style={{ marginLeft: "20px" }}>Sep 26, 2021</small>
              <h1 style={{ marginLeft: "20px" }}>
                GPT-3 and Open AI is the future. Let us explore how it is?
              </h1>
              <div className="lal" style={{ marginLeft: "20px" }}>
                Read Full Article
              </div>
            </div>
          </div>
          <div className=" meinsa">
            <img src={five} alt="" />
            <div>
              <small style={{ marginLeft: "20px" }}>Sep 26, 2021</small>
              <h1 style={{ marginLeft: "20px" }}>
                GPT-3 and Open AI is the future. Let us explore how it is?
              </h1>
              <div className="lal" style={{ marginLeft: "20px" }}>
                Read Full Article
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
