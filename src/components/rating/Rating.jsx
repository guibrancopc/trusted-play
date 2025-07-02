import React from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import styles from "./Rating.module.css";

export function Rating({ initialRating, readonly }) {
  return (
    <div className={styles.tpRating}>
      <ReactRating
        value={initialRating}
        readOnly={readonly}
        style={{ maxWidth: 150 }}
      />
    </div>
  );
}
