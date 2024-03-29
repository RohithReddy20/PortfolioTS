import React from "react";
import styles from "./Projects.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export interface Props {
  image: string;
  title: string;
  description: string;
  github: string;
  live: string;
}

function Project(props: Props) {
  return (
    <div className={styles.project}>
      {/* <img src={props.image} alt="food" /> */}
      <LazyLoadImage src={props.image} alt="food" effect="blur" />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            window.open(props.live, "_blank");
          }}
        >
          View Live
        </button>
        <button
          onClick={() => {
            window.open(props.github, "_blank");
          }}
        >
          Github Repo
        </button>
      </div>
    </div>
  );
}

export default Project;
