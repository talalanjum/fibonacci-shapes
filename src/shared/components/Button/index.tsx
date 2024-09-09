import classNames from "classnames";
import styles from "./styles.module.css";

import React, { MouseEvent } from "react";

interface Props {
  type: string;
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<Props> = (props) => {
  const { type, text, onClick } = props;

  return (
    <button
      className={classNames(
        styles.button,
        type === "primary" ? styles.primary : styles.secondary
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
