import React from "react";
import Project from "./Project";
import styles from "./Projects.module.css";
import alphare from "../../images/alpahre.jpeg";
import ngan from "../../images/nganpf.png";
import swoop from "../../images/swoopL.jpeg";
import LineNavigator from "../LineNavigator/LineNavigator";
// import { ListProps } from '@mui/material';
// import swoopDashboard from "../../images/swoop.png";
type Props = {};

interface ProjectsType {
  image: string;
  title: string;
  description: string;
  github: string;
  live: string;
}

const projects: ProjectsType[] = [
  {
    image: alphare,
    title: "Alphare",
    description:
      "Alphare is designed to improve the service quality and customer experience for real estate agencies",
    github: "https://github.com/RohithReddy20/alphare",
    live: "https://alphare.netlify.app/",
  },
  {
    image: ngan,
    title: "Portfolio",
    //write a description of three lines
    description:
      "This is my friends portfolio, it is built using NextJs. It is hosted on Vercel. It is a static website and is very fast.",
    github: "https://github.com/RohithReddy20/ngan",
    live: "https://ngan.vercel.app/",
  },
  {
    image: swoop,
    title: "Swoop",
    // rewrite Swoop World's first Web 3.0 fantasy cricket app. Try out brand new experience of playing fantasy sports on Web 3.0
    description:
      "Swoop World's first Web 3.0 fantasy cricket app. It's a new experience of playing fantasy sports on Web 3.0",
    github: "https://github.com/RohithReddy20/swoop",
    live: "https://swoop.games/",
  },
];

function Projects({}: Props) {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projects}>
        <div className={styles.header}>Projects</div>
        <div className={styles.note}>
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </div>
        <div className={styles.projectsList}>
          {/* <Project /><Project /><Project /><Project /><Project /><Project /> */}
          {projects.map((project, index) => {
            return <Project key={index} {...project} />;
          })}
        </div>
      </div>
      <div>
        <LineNavigator section="projects" />
      </div>
    </section>
  );
}

export default Projects;
