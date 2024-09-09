import styles from "./styles.module.css";

interface Props {
  index: number;
  icon: string;
}

export const IconRow: React.FC<Props> = (props) => {
  const { index, icon } = props;

  const fibonacci = (n: number) => {
    if (n <= 1) {
      return n;
    }

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
      let temp = curr;
      curr = prev + curr;
      prev = temp;
    }

    return curr;
  };

  return (
    <div className={styles.row}>
      <span className={styles.number}>{index}</span>
      <div className={styles.shapeWrapper}>
        {index > 0 &&
          [...Array(fibonacci(index))].map((value, index) => (
            <img
              className={styles.shape}
              src={icon.toString()}
              alt="icon"
              key={index}
            />
          ))}
      </div>
    </div>
  );
};
