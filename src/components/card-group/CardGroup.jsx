import React from "react";
import styles from "./CardGroup.module.css";

export function CardGroup({ children }) {
  return (
    <div className={styles.tpCardGroup}>{children}</div>
  );
}
