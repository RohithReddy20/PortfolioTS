import React from 'react';
import styles from "./Projects.module.css";

type Props = {}

function Project({}: Props) {
  return (
    <div className={styles.project}>
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="food" />
      <h4>FOODER</h4>
      <p>A live Geolocation app for finding tweets and twitter users around you.</p>
      <div className={styles.buttons}>
        <button>View Live</button>
        <button>Github Repo</button>
      </div>
    </div>
  )
}

export default Project