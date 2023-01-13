import React from "react";
import styles from "./About.module.css";
import aboutPng from "../../images/loto_b_min.png";
import Resume from "../../files/Resume.pdf";

type Props = {};

const About = (props: Props) => {
  return (
    <div className={styles.about}>
      <img src={aboutPng} alt="about" />
      <h2 className={styles.header}>About Me</h2>
      <h3>
        Passionate about building great Websites with professional and elegant
        user interfaces.
      </h3>
      <p>
        I am a full stack developer working on a variety of different projects,
        exploring and discovering new technologies. My internships have allowed
        me to work on projects that include firebase, Version Control, and Web
        hosting. Working knowledge of these technologies is one of my strengths
        as a Full Stack Developer with 9 months of professional experience.
      </p>
      <a href={Resume} download="Resume.pdf">
        Download My Resume
      </a>
    </div>
  );
};

export default About;
