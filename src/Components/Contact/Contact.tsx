import React, { useState } from "react";
import LineNavigator from "../LineNavigator/LineNavigator";
import styles from "./Contact.module.css";

// export interface IContactProps {
// }
// props: IContactProps

export interface mailState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
  }) as [mailState, (mailState: mailState) => void];

  const handleMailStateChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { value } = e.currentTarget;
    // console.log(name, value);
    setMailerState({
      ...mailerState,
      [name]: value,
    });
  };

  const submitEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({ mailerState });
    const response = await fetch("https://7f9mvb-3001.pitcher-staging.csb.dev/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
        });
        console.log("success")
      }).catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contactForm}>
        <div className={styles.title}>Connect With Me</div>
        <form action="">
          <input type="text" placeholder="Name" name="name" value={mailerState.name} onChange={handleMailStateChange} className={styles.name} />
          <input type="email" placeholder="Email" name="email" value={mailerState.email} onChange={handleMailStateChange} className={styles.email} />
          <textarea placeholder="Message" name="message" value={mailerState.message} onChange={handleMailStateChange} className={styles.message}></textarea>
          <button className={styles.submit} onClick={submitEmail}>Submit</button>
        </form>
      </div>
      <div>
        <LineNavigator section="contact" />
      </div>
    </div>
  );
}
