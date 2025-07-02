import React from "react";
import styles from "./Container.module.css";

export function Container({ children }) {
  return (
    <div className={styles.tpContainer}>{children}</div>
  );
}
