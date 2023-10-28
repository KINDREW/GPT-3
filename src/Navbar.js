import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const Navbar = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const sideMenu = () => {
    const navbar = targetRef.current;
    const bar = targetRef2.current;

    if (navbar) {
      if (navbar.classList.contains("menu")) {
        navbar.classList.remove("menu");
        navbar.classList.add("appear");
        bar.classList.add("change");
      } else {
        navbar.classList.remove("appear");
        bar.classList.remove("change");
        navbar.classList.add("menu");
      }
    }
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="left-nav">
        <h1>GPT - 3</h1>
        <ul className="menu" ref={targetRef}>
          <li>
            <ScrollLink
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
              onClick={sideMenu}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="WhatisGPT"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
              onClick={sideMenu}
            >
              What is GPT
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="OpenAI"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
              onClick={sideMenu}
            >
              Open AI
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="CaseStudy"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
              onClick={sideMenu}
            >
              Case Studies
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Blog"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
              onClick={sideMenu}
            >
              Library
            </ScrollLink>
          </li>
          <div className="right-nav2">
            <span className="signin">Sign in</span>
            <span className="signup">Sign up</span>
          </div>
        </ul>
      </div>
      <div className="right-nav">
        <span className="signin">Sign in</span>
        <span className="signup">Sign up</span>
      </div>

      <div class="bar" onClick={sideMenu} ref={targetRef2}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
