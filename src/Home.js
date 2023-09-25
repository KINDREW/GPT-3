import "./Home.css";
import ai from "./assets/ai.png";
import people from "./assets/people.png";
import google from "./assets/google.png";
import slack from "./assets/slack.png";
import atlassian from "./assets/atlassian.png";
import dropbox from "./assets/dropbox.png";
import shopify from "./assets/shopify.png";
const Home = () => {
  return (
    <div className="main">
      <div className="contents">
        <div className="left-content">
          <div className="top">
            <h1>
              Let's Build Something <br />
              amazing with GPT-3 <br /> OpenAI
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem obcaecati eius quibusdam quisquam veritatis fuga
              impedit, cum corrupti quo sint molestiae, aliquam, doloremque quia
              alias assumenda nam blanditiis sunt est.
            </p>
          </div>

          <input type="text" placeholder="Your Email Address" />
          <button>Get Started</button>

          <div className="people">
            <img src={people} alt="people" />
            <small>1,600 people requested access a visit in 24hours</small>
          </div>
        </div>
        <div className="right-content">
          <img src={ai} alt="ai" />
        </div>
      </div>
      <div className="companies">
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlassian} alt="atlassian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Home;
