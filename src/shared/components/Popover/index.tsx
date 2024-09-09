import { Button } from "../Button";
import styles from "./styles.module.css";
import React, { MouseEvent } from "react";

interface Props {
  title: string;
  subTitle: string;
  buttonText: string;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Popover: React.FC<Props> = (props) => {
  const { title, subTitle, buttonText, onClose } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.popover}>
        <div className={styles.topWrapper}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subTitle}>{subTitle}</span>
        </div>
        <div className={styles.buttonWrapper}>
          <Button type="primary" text={buttonText} onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
