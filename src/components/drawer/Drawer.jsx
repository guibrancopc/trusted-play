import React from "react";
import styles from "./Drawer.module.css";

export function Drawer({ children, title, footer, isVisible, onClose }) {
  if (!isVisible) { // Render nothing if not visible to simplify conditional class logic
    return null;
  }

  return (
    <>
      <aside className={`${styles.tpDrawer} ${!isVisible ? styles.tpDrawerHidden : ""}`}>
        <button className={styles.tpDrawerCloseButton} onClick={onClose}>
          &times;
        </button>
        <header>
          <h2>{title}</h2>
        </header>
        <main>{children}</main>
        <footer className={styles.tpDrawerFooter}>{footer}</footer>
      </aside>
      <div
        className={`${styles.tpDrawerOverlay} ${!isVisible ? styles.tpDrawerOverlayHidden : ""}`}
        onClick={onClose}
      ></div>
    </>
  );
}
