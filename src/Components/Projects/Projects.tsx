import React from 'react';
import Project from './Project';
import styles from "./Projects.module.css"

type Props = {}

function Projects({}: Props) {
  return (
    <div className={styles.projects}>
      <div className={styles.header}>Projects</div>
      <div className={styles.note}>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</div>
        <div className={styles.projectsList}>
        <Project /><Project /><Project /><Project /><Project /><Project />
        </div>
    </div>
  )
}

export default Projects