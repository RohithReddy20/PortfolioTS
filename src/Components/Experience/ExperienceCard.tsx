import React from "react";
import styles from "./Experience.module.css";
import { ExperienceCardType } from "./Experience";

const ExperienceCard = (props: ExperienceCardType) => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.timePeriod}>{props.timePeriod}</div>
      <div className={styles.companyName}>{props.companyName}</div>
      <div className={styles.jobTitle}>{props.jobTitle}</div>
      <div className={styles.jobDescription}>
        <ul>
          {props.jobDescription.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
