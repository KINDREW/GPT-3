import "./CaseStudy.css";
import possibilities from "./assets/possibility.png";

const CaseStudy = () => {
  return (
    <div className="casestudy">
      <img src={possibilities} alt="" />

      <div className="kolo">
        <small>Request Early Access to Get Started</small>
        <h1>The posibilities are beyond imagination</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          repellat vero dolore. Expedita aliquid incidunt dolores distinctio,
          perspiciatis omnis maxime?
        </p>
        <small>Request Early Access to Get Started</small>
      </div>
    </div>
  );
};

export default CaseStudy;
