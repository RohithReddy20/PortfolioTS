import React, { ReactElement, useState } from "react";

import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button/Button";
import CloseIcon from "@mui/icons-material/Close";

// type NavbarProps = {
//     name: string;
//     number: number;
// }

function Navbar(): ReactElement {
  const [openNav, setOpenNav] = useState<boolean>(true);

  const handleClick = () => {
    const el = document.querySelector(`.${styles.navItems}`) as HTMLElement;
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
      <div className={styles.navItems}>
        <div className={styles.navItem}>Home</div>
        <div className={styles.navItem}>Skills</div>
        <div className={styles.navItem}>Projects</div>
        <div className={styles.navItem}>Contact</div>
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
