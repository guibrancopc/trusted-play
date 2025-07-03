import React from "react";
import { Icon } from "../icon";
import { Button } from "../button";
import styles from "./AddButton.module.css";

export function AddButton({ children, ...props }) {
  return (
    <Button className={`tp-add-button`} {...props}>
      <Icon iconKey="plus" className={styles.tpAddButtonIcon} />
      {children}
    </Button>
  );
}
