import styles from "./AnsButton.module.scss";

type Props = {
  title: number;
  onClick: () => void;
};
const AnsButton: React.FC<Props> = ({ onClick, title }) => (
  <button className={styles.btn} type="button" onClick={onClick}>
    {title}
  </button>
);

export default AnsButton;
