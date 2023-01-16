import React, { ReactEventHandler, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Experience from "./Components/Experience/Experience";

// import { ArrowUpwardOutlined } from "@mui/icons-material";
import upArrow from "./images/arrow-up.svg";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function App() {
  const [scroll, setScroll] = useState<number>(0);
  const [showArrow, setShowArrow] = useState<boolean>(false);
  const [arrowColor, setArrowColor] = useState<string>("#000");

  function elementsOverlap(el1: HTMLElement, el2: HTMLElement) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

  //setTimeout function declaration
  // const sleep = (milliseconds: number) => {
  //   return new Promise((resolve) => setTimeout(resolve, milliseconds));
  // };,
  // let endScroll: NodeJS.Timeout;

  //change color of keyboard arrow when it overlaps with diffrent sections
  const changeColor = () => {
    const upArrow = document.getElementById("upArrow") as HTMLElement;
    const home = document.getElementById("home") as HTMLElement;
    const about = document.getElementById("about") as HTMLElement;
    const experience = document.getElementById("experience") as HTMLElement;
    const skills = document.getElementById("skills") as HTMLElement;
    const projects = document.getElementById("projects") as HTMLElement;
    const contact = document.getElementById("contact") as HTMLElement;
    const footer = document.getElementById("footer") as HTMLElement;

    if (elementsOverlap(upArrow, home)) {
      setArrowColor("#000");
      return;
    } else if (elementsOverlap(upArrow, about)) {
      setArrowColor("#ff4a57");
      return;
    } else if (elementsOverlap(upArrow, experience)) {
      setArrowColor("#000");
      return;
    } else if (elementsOverlap(upArrow, skills)) {
      setArrowColor("#ff4a57");
      return;
    } else if (elementsOverlap(upArrow, projects)) {
      setArrowColor("#000");
      return;
    } else if (elementsOverlap(upArrow, contact)) {
      setArrowColor("#ff4a57");
      return;
    } else if (elementsOverlap(upArrow, footer)) {
      setArrowColor("#ff4a57");
      return;
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > scroll) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
    changeColor();
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // clearTimeout(endScroll);
    const endScroll: NodeJS.Timeout = setTimeout(() => {
      setShowArrow(false);
      // console.log("scrolling stopped");
    }, 2000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(endScroll);
    };
  }, [scroll]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
                {/* <img
                  style={{ opacity: showArrow ? "1" : "0" }}
                  id="upArrow"
                  src={upArrow}
                  alt="uparrow"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                /> */}
                <KeyboardDoubleArrowUpIcon
                  id="upArrow"
                  sx={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    opacity: showArrow ? "1" : "0",
                    fontSize: "3rem",
                    color: `${arrowColor}`,
                    cursor: "pointer",
                    transition: "opacity 0.3s ease",
                  }}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
