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
import UpArrow from "./Components/UpArrow/UpArrow";

// import { ArrowUpwardOutlined } from "@mui/icons-material";
// import upArrow from "./images/arrow-up.svg";
function App() {
  //setTimeout function declaration
  // const sleep = (milliseconds: number) => {
  //   return new Promise((resolve) => setTimeout(resolve, milliseconds));
  // };,
  // let endScroll: NodeJS.Timeout;

  //change color of keyboard arrow when it overlaps with diffrent sections

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
                <UpArrow />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
