import "./App.css";
import Blog from "./Blog";
import CaseStudy from "./Casestudy";
import Home from "./Home";
import Navbar from "./Navbar";
import OpenAI from "./OpenAi";
import WhatisGPT from "./WhatisGPT";
import Footer from "./footer";
import Register from "./register";
import { Link as ScrollLink, Element } from "react-scroll";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Element name="Home">
        <Home />
      </Element>

      <Element name="WhatisGPT">
        <WhatisGPT />
      </Element>
      <Element name="OpenAI">
        <OpenAI />
      </Element>
      <Element name="CaseStudy">
        <CaseStudy />
      </Element>
      <Element name="Regsiter">
        <Register />
      </Element>
      <Element name="Blog">
        <Blog />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
