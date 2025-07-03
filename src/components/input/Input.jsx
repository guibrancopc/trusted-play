import React from "react";
import styles from "./Input.module.css";

export function Input({ onChange, value }) {
  return <input className={styles.tpInput} onChange={onChange} value={value} />;
}
