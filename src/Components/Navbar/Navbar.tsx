import React, { ReactElement, useState } from "react";

import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import About from "../Home/About";
import Experience from "../Experience/Experience";

// type NavbarProps = {
//     name: string;
//     number: number;
// }

function Navbar(): ReactElement {
  const [openNav, setOpenNav] = useState<boolean>(true);

  const handleClick = () => {
    const el = document.getElementsByClassName(
      styles.navItems
    )[0] as HTMLElement;
    // console.log(el);
    if (openNav) {
      el.style.top = "59px";
    } else {
      el.style.top = "-250px";
    }
    setOpenNav(!openNav);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navLogo}>
        C<span>R</span>R
      </div>
      <div onClick={handleClick} className={styles.navItems}>
        <div
          onClick={() => {
            document.getElementById("home")?.scrollIntoView();
          }}
          className={styles.navItem}
        >
          Home
        </div>
        {/* <div
          onClick={() => {
            document.getElementById("about")?.scrollIntoView();
          }}
          className={styles.navItem}
        >
          About
        </div> */}
        <div
          onClick={() => {
            document.getElementById("experience")?.scrollIntoView();
          }}
          className={styles.navItem}
        >
          Experience
        </div>
        <div
          onClick={() => {
            document.getElementById("skills")?.scrollIntoView();
          }}
          className={styles.navItem}
        >
          Skills
        </div>
        <div
          onClick={() => {
            document.getElementById("projects")?.scrollIntoView();
          }}
          className={styles.navItem}
        >
          Projects
        </div>
        <div
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView();
          }}
          className={styles.navItem}
        >
          Contact
        </div>
      </div>
      <div className={styles.menu}>
        <Button onClick={handleClick} color="inherit">
          {!openNav ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
