import React from "react";
import styles from "./Field.module.css";

export function Field({ children, label, required }) {
  return (
    <div className={styles.tpField}>
      <label className={styles.label}>
        {label} {required && <span className={styles.tpSpanRequired}>*</span>}
      </label>
      <div className={styles.tpFieldContainer}>{children}</div>
    </div>
  );
}
