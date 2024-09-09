import { useState } from "react";
import styles from "./styles.module.css";
import { Button } from "../../shared/components/Button";
import SquareIcon from "../../assets/icons/rectangle.svg";
import CircleIcon from "../../assets/icons/circle.svg";
import TriangleIcon from "../../assets/icons/triangle.svg";
import { IconRow } from "../IconRow";
import { Popover } from "../../shared/components/Popover";
import React from "react";

const shapes = [SquareIcon, CircleIcon, TriangleIcon];

export const Home = () => {
  const [index, setIndex] = useState(0);

  const [popoverOpen, setPopoverOpen] = useState(false);

  const checkIndex = () => {
    if (index < 10) {
      setIndex(index + 1);
    } else {
      setPopoverOpen(true);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.topSection}>
          <div className={styles.indexWrapper}>
            Current Index <span className={styles.index}>{index}</span>
          </div>
          <div className={styles.buttonsWrapper}>
            <Button type="primary" text="Add" onClick={checkIndex} />
            <Button
              type="primary"
              text="Remove"
              onClick={() => setIndex(index > 0 ? index - 1 : 0)}
            />
            <Button
              type="secondary"
              text="Restart"
              onClick={() => setIndex(0)}
            />
          </div>
        </div>
        <div className={styles.panel}>
          {[...Array(index)].map((value, index) => (
            <IconRow index={index + 1} icon={shapes[index % 3]} key={index} />
          ))}
        </div>
      </div>
      {popoverOpen && (
        <Popover
          title={`Current index is ${index}`}
          subTitle={"The game will restart"}
          buttonText="OK"
          onClose={() => {
            setPopoverOpen(false);
            setIndex(0);
          }}
        />
      )}
    </>
  );
};
