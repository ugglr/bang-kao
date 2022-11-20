import styles from "./Numpad.module.scss";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type Props = {
  handleNumber: (nbr: number) => void;
  onDelete: () => void;
  onSubmit: () => void;
};
const Numpad: React.FC<Props> = ({ handleNumber, onDelete, onSubmit }) => (
  <div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      {numbers.map((nbr) => (
        <button
          onClick={() => handleNumber(nbr)}
          type="button"
          className={styles.btn}
          key={nbr}
        >
          {nbr}
        </button>
      ))}
    </div>
    <div>
      <button
        onClick={() => handleNumber(0)}
        type="button"
        className={styles.btn}
      >
        0
      </button>
      <button onClick={onDelete} type="button" className={styles.delete}>
        AC
      </button>
      <button onClick={onSubmit} type="button" className={styles.submit}>
        OK
      </button>
    </div>
  </div>
);

export default Numpad;
