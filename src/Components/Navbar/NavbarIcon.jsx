import React from "react";
import styles from "./NavbarIcon.module.css";
export default function NavbarIcon({ image, label }) {
  return (
    <div className={styles.NavbarIcon__Main}>
      <img src={image} alt={image} />
      <p>{label}</p>
    </div>
  );
}
