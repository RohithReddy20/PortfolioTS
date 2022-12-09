import * as React from "react";
import LineNavigator from "../LineNavigator/LineNavigator";
import styles from "./Contact.module.css";

// export interface IContactProps {
// }
// props: IContactProps

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactForm}>
        <div className={styles.title}>
          Connect With Me
        </div>
        <form action="">
          <input type="text" placeholder="Name" className={styles.name} />
          <input type="email" placeholder="Email" className={styles.email} />
          <textarea placeholder="Message" className={styles.message} ></textarea>
          <button className={styles.submit}>Submit</button>
        </form>
      </div>
        <LineNavigator />
    </div>
  );
}
