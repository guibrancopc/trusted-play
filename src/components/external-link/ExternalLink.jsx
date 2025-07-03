import React from "react";
import { Icon } from "../icon";
import styles from "./ExternalLink.module.css";

export function ExternalLink({ children, url, type }) {
  const linkClasses = [
    styles.tpExternalLink,
    type && styles[type], // e.g. styles.primary or styles.success
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className={linkClasses}
    >
      {children}
      <Icon iconKey="externalLink" className={styles.tpExternalLinkIcon} />
    </a>
  );
}
