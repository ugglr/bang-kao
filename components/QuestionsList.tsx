import { Question as Q } from "../util";
import Question from "./Question";

type Props = {
  questions: Q[];
};
const QuestionsList: React.FC<Props> = ({ questions }) => (
  <div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        width: "80vw",
      }}
    >
      {questions.map(({ a, b, sign }) => (
        <Question key={a + b + "list"} {...{ a, b, sign }} />
      ))}
    </div>
  </div>
);

export default QuestionsList;
