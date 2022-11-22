type Props = {
  a: number;
  b: number;
  sign: string;
  index?: number;
};
const Question: React.FC<Props> = ({ a, b, sign, index }) => {
  return (
    <div
      style={{ alignItems: "center", display: "flex", flexDirection: "row" }}
    >
      {index && <p style={{ marginRight: "8px" }}>{`${index}.) `}</p>}
      <h1
        style={{ marginLeft: "8px", marginRight: "8px", fontSize: "3rem" }}
      >{`${a} ${sign} ${b} =`}</h1>
    </div>
  );
};
export default Question;
