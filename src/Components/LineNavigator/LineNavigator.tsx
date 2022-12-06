import * as React from "react";
import styles from "./LN.module.css";

export interface ILineNavigatorProps {}
// props: ILineNavigatorProps

export default function LineNavigator() {

  const handleClick = (event : React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.querySelectorAll(`.${styles.LNG}>a`) as NodeListOf<HTMLAnchorElement>;
    el.forEach((anc : HTMLAnchorElement) => {
      anc.style.backgroundColor = "#23263a"
    })
    event.currentTarget.style.backgroundColor = "#ff4a57"
  };

  return (
    <div className={styles.LNG}>
      <a href="#home" onClick={handleClick} id="Lhome"></a>
      <a href="#home" onClick={handleClick} id="Lskills"></a>
      <a href="#home" onClick={handleClick} id="Lprojects"></a>
      <a href="#home" onClick={handleClick} id="Lcontact"></a>
      <div className={styles.line}>.</div>
    </div>
  );
}
