import "./App.css";
import Blog from "./Blog";
import CaseStudy from "./Casestudy";
import Home from "./Home";
import Navbar from "./Navbar";
import OpenAI from "./OpenAi";
import WhatisGPT from "./WhatisGPT";
import Register from "./register";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <WhatisGPT />
      <OpenAI />
      <CaseStudy />
      <Register />
      <Blog />
    </div>
  );
};

export default App;
