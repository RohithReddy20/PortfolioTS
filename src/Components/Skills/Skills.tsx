import * as React from 'react';
import styles from "./Skills.module.css";
import LineNavigator from '../LineNavigator/LineNavigator';

import github from "../../images/github.svg"
import html from "../../images/html-5.png"
import css from "../../images/css50.png"
import javascript from "../../images/jsp.png"
import react from "../../images/react-48.png"
import webdev from "../../images/webdev.png"
// import backend from "../../images/backend-64.png"
// import firebase from "../../images/firebase-48.png"
import python from "../../images/python-32.png"




// export interface ISkillsProps {
// }
// props: ISkillsProps

export default function Skills() {
    return (
        <div className={styles.skillsSection}>
            <div className={styles.skills}>
                <div className={styles.header}>
                    <span>Skill</span>-Set
                </div>
                <div className={styles.skillItems}>
                    <div className={styles.skill}>
                        <img src={github} alt="skill" />
                        <div className={styles.skillTitle}>Git Version Control</div>
                        <div className={styles.note}>
                        Git is without a doubt the most critical software skill I have today. It allows me to work with others, it allows me develop code faster.
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <span><img src={html} alt="skill" /><img src={css} alt="skill" /></span>
                        <div className={styles.skillTitle}>HTML & CSS</div>
                        <div className={styles.note}>
                        I have a strong background in HTML, CSS, and responsive design. I can create beautiful websites that are easy to navigate and manage.
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <img src={javascript} alt="skill" />
                        <div className={styles.skillTitle}>Javascript</div>
                        <div className={styles.note}>
                        JS makes responsive design easier. JavaScript has become integral to the Internet experience as developers build increased interaction and complexity into their applications. 
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <img src={react} alt="skill" />
                        <div className={styles.skillTitle}>ReactJS</div>
                        <div className={styles.note}>
                        One of the main benefits of using React JS is its potential to reuse components. It saves a lot of time fo me as I don't have to write various codes for the same features.
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <img src={webdev} alt="skill" />
                        <div className={styles.skillTitle}>Web Development</div>
                        <div className={styles.note}>
                        Web development is designing and coding a functional layout for your site, making sure it's compatible with all browsers, mobile devices, and other devices that might access the site. 
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <img src={python} alt="skill" />
                        <div className={styles.skillTitle}>Python</div>
                        <div className={styles.note}>
                        Python is a powerful and easy-to-use programming language that can be used to create applications, games, and more. It's known for its readability, with simple syntax that makes it easy to read and understand
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navigator}>
                <LineNavigator />
            </div>
        </div>
    );
}
