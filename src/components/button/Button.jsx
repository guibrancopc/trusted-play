import React from "react";
import styles from "./Button.module.css";

export function Button({ children, type, onClick, disabled, className }) {
  // Combine base class, type-specific class, and any additional className prop
  const buttonClasses = [
    styles.tpButton,
    type && styles[type], // styles.primary, styles.success, etc.
    className, // Allow external classes to be passed
  ]
    .filter(Boolean) // Remove any falsy values (e.g., if type is undefined)
    .join(" ");

  return (
    <button
      disabled={disabled}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
