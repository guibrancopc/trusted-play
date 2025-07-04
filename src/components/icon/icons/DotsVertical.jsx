import React from "react";
import styles from "./DotsVertical.module.css";

export function DotsVertical({ className, style }) {
  return (
    <svg
      className={className} // Keep external className if provided
      style={style}
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 29.96 122.88"
      fill="currentColor" // Apply fill directly
    >
      <defs></defs>
      <title>3-vertical-dots</title>
      <path
        className={styles.dotsVerticalCls1} // Use CSS module class
        d="M15,0A15,15,0,1,1,0,15,15,15,0,0,1,15,0Zm0,92.93a15,15,0,1,1-15,15,15,15,0,0,1,15-15Zm0-46.47a15,15,0,1,1-15,15,15,15,0,0,1,15-15Z"
      />
    </svg>
  );
}
