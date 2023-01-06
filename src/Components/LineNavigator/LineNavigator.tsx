import * as React from "react";
import styles from "./LN.module.css";

export interface ILineNavigatorProps {
  section: string;
}

export default function LineNavigator(props: ILineNavigatorProps) {
  // const handleClick = (event : React.MouseEvent<HTMLAnchorElement>) => {
  //   const el = document.querySelectorAll(`.${styles.LNG}>a`) as NodeListOf<HTMLAnchorElement>;
  //   el.forEach((anc : HTMLAnchorElement) => {
  //     anc.style.backgroundColor = "#23263a"
  //   })
  //   event.currentTarget.style.backgroundColor = "#ff4a57"
  // };

  return (
    <div className={styles.LNG}>
      <a
        href="#home"
        style={{
          backgroundColor: props.section === "home" ? "#ff4a57" : "#23263a",
        }}
        id="Lhome"
      ></a>
      <a
        href="#skills"
        style={{
          backgroundColor: props.section === "skills" ? "#ff4a57" : "#23263a",
        }}
        id="Lskills"
      ></a>
      <a
        href="#projects"
        style={{
          backgroundColor: props.section === "projects" ? "#ff4a57" : "#23263a",
        }}
        id="Lprojects"
      ></a>
      <a
        href="#contact"
        style={{
          backgroundColor: props.section === "contact" ? "#ff4a57" : "#23263a",
        }}
        id="Lcontact"
      ></a>
      <div className={styles.line}>.</div>
    </div>
  );
}
