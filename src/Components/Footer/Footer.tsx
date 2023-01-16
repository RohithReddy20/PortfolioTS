import React from "react";
import styles from "./Footer.module.css";
import github from "../../images/github.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import sms from "../../images/sms.svg";
import location from "../../images/location.svg";
import instagram from "../../images/instagram.svg";

// type Props = {}
// props: Props

const Footer = () => {
  return (
    <section id="footer" title="footer">
      <div className={styles.footer}>
        <div className={styles.navLogo}>
          C<span>R</span>R
        </div>
        <div className={styles.communication}>
          <div className={styles.address}>
            <div className="location">
              <img src={location} alt="location" /> Banglore, India-560069
            </div>
            <div className="sms">
              <img src={sms} alt="sms" /> +91 9866874038
            </div>
          </div>
          <div className={styles.socialMedia}>
            <img
              src={github}
              onClick={() => {
                window.open("https://github.com/RohithReddy20", "_blank");
              }}
              alt="github"
            />
            <img
              src={facebook}
              onClick={() => {
                window.open("https://www.facebook.com/RohithReddy20", "_blank");
              }}
              alt="facebook"
            />
            <img
              src={linkedin}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/chimpirirohith/",
                  "_blank"
                );
              }}
              alt="linkedin"
            />
            <img
              src={instagram}
              onClick={() => {
                window.open(
                  "https://www.instagram.com/rohithreddy.c/",
                  "_blank"
                );
              }}
              alt="instagram"
            />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2022. All Rights Reserved.
      </div>
    </section>
  );
};

export default Footer;
