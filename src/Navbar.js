import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

const Navbar = () => {
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
        <ul>
          <li>
            <ScrollLink
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-70} // Adjust this offset as needed
              duration={500}
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
            >
              Library
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="right-nav">
        <span className="signin">Sign in</span>
        <span className="signup">Sign up</span>
      </div>
    </nav>
  );
};

export default Navbar;
