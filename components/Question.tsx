type Props = {
  a: number;
  b: number;
  sign: "+" | "-";
};
const Question: React.FC<Props> = ({ a, b, sign }) => (
  <div style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
    <h1>{a}</h1>
    <h1 style={{ margin: "16px 16px" }}>{sign}</h1>
    <h1>{b}</h1>
    <h1 style={{ margin: "16px 16px" }}>=</h1>
  </div>
);

export default Question;
