import React from "react";
import LineNavigator from "../LineNavigator/LineNavigator";
import styles from "./Home.module.css";

// export interface IAppProps {
// }
// props: IAppProps

export default function Home() {
  return (
    <div className={styles.home} id="home">
      <div className={styles.content}>
        <div className={styles.title}>
          Hello, I'm a Full Stack Web Developer
        </div>
        <div className={styles.note}>
          Passionate about building great Websites with professional and elegant
          user interfaces.{" "}
        </div>
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.connect}
        >
          Let's Connect
        </button>
      </div>
      <div className={styles.navigator}>
        <LineNavigator section="home" />
      </div>
    </div>
  );
}
