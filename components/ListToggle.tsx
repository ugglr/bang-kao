import { Dispatch, SetStateAction } from "react";

type Props = {
  setListMode: Dispatch<SetStateAction<boolean>>;
};
const ListToggle: React.FC<Props> = ({ setListMode }) => (
  <div style={{ marginBottom: "12px" }}>
    <button
      onClick={() => setListMode(true)}
      style={{
        backgroundColor: "purple",
        borderRadius: "8px",
        height: "50px",
        marginRight: "16px",
        width: "120px",
      }}
      type="button"
    >
      单子
    </button>
    <button
      onClick={() => setListMode(false)}
      style={{
        backgroundColor: "purple",
        borderRadius: "8px",
        height: "50px",
        width: "120px",
      }}
      type="button"
    >
      考
    </button>
  </div>
);

export default ListToggle;
