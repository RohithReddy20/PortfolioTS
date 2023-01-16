import React from "react";
import styles from "./Experience.module.css";
type Props = {};
import expLogo from "../../images/loto_c_min.png";
import ExperienceCard from "./ExperienceCard";

export interface ExperienceCardType {
  timePeriod: string;
  companyName: string;
  jobTitle: string;
  jobDescription: string[];
}

const experiences: ExperienceCardType[] = [
  {
    timePeriod: "Sep 2021 - Dec 2021",
    companyName: "TECHSYNERIC TECHNOLOGIES",
    jobTitle: "Web Developer",
    jobDescription: [
      "Worked on Occupational HealthCare solutions using PHP technologies",
      "Collaborated with senior management on multiple functions including customer success and finance, increasing survey submissions from 60% the previous month to 75% by identifying the pain points of customer feedback.",
      "Oversaw other interns on project milestones and coordinated with clients on any proposed changes or challenges to be overcome.",
    ],
  },
  {
    timePeriod: "Dec 2021 - May 2022",
    companyName: "AISENCE TECHNOLOGIES",
    jobTitle: "React Developer",
    jobDescription: [
      "Built a website to improve the service quality and customer experience for real estate agencies",
      "Maintained high-level expertise in React state management strategies.",
      "Documented technical workflows and knowledge to educate newly hired employees.",
      "Canvased site and app requirements with clients to produce actionable development plans.",
    ],
  },
  {
    timePeriod: "May 2022 - Present",
    companyName: "NUMBER THEORY SOFTWARE",
    jobTitle: "Software Design Engineer T",
    jobDescription: [
      "Working on a project that increases productivity, fosters collaboration and speeds up data science project execution to accelerate data to insights journey with its intuitive AI Studio",
    ],
  },
];

const Experience = (props: Props) => {
  return (
    <section id="experience" className={styles.experience}>
      <img src={expLogo} alt="experience" />
      <h2>Experience</h2>
      <div className={styles.experienceCards}>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
