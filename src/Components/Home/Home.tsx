import React from "react";
// import LineNavigator from "../LineNavigator/LineNavigator";
import styles from "./Home.module.css";
import homeLogo from "../../images/loto_a.png";
import homePng from "../../images/home.png";
import About from "./About";

// export interface IAppProps {
// }
// props: IAppProps

export default function Home() {
  return (
    <>
      {" "}
      <div className={styles.home} id="home">
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={homeLogo} alt="logo" />
          </div>
          <div className={styles.title}>
            <h1 className={styles.name}>ROHITH REDDY</h1>
            Full Stack Web Developer
          </div>
          {/* <div className={styles.note}>
          Passionate about building great Websites with professional and elegant
          user interfaces.{" "}
        </div> */}
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={styles.connect}
          >
            DROP ME A LINE
          </button>
        </div>
        <div className={styles.imgContainer}>
          <img src={homePng} alt="home" />
        </div>
        {/* <div className={styles.navigator}>
        <LineNavigator section="home" />
      </div> */}
      </div>
      <About />
    </>
  );
}
