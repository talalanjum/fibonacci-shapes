import styles from "./styles.module.css";
import logo from "./../../assets/icons/logo.svg";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.heading}>Fibonacci Sequence</h1>
      </div>
    </div>
  );
};
