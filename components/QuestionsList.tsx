import { Question as Q } from "../util";
import Question from "./Question";
import { Answer } from "./Test";

type Props = {
  questions: Q[];
  answers: Answer[];
};
const QuestionsList: React.FC<Props> = ({ questions, answers = [] }) => (
  <div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr))",
        width: "90vw",
      }}
    >
      {questions.map(({ a, b, sign }, index) => {
        const ans = answers[index]?.answer;
        const hasErrors = answers[index]?.hasErrors;

        return (
          <div
            key={index + "list"}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Question {...{ a, b, sign, index: index + 1 }} />
            {(ans || ans === 0) && (
              <p
                style={{ fontSize: "3rem", marginLeft: "12px", color: "green" }}
              >
                <span style={hasErrors ? { color: "red" } : undefined}>
                  {ans}
                </span>
              </p>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default QuestionsList;
