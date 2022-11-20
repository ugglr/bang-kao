import { Dispatch, SetStateAction } from "react";

type Props = {
  setListMode: Dispatch<SetStateAction<boolean>>;
};
const ListToggle: React.FC<Props> = ({ setListMode }) => (
  <div style={{ marginBottom: "4rem" }}>
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
      list mode
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
      test mode
    </button>
  </div>
);

export default ListToggle;
