type Props = {
  a: number;
  b: number;
  sign: string;
};
const Question: React.FC<Props> = ({ a, b, sign }) => (
  <div style={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
    <h1>{`${a}${sign}${b}=`}</h1>
  </div>
);

export default Question;
