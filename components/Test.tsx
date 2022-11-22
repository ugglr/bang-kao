import { useState } from "react";
import ListToggle from "./ListToggle";
import { Question as Q } from "../util";
import Question from "./Question";
import QuestionsList from "./QuestionsList";
import Numpad from "./Numpad";
import Timer from "./Timer";

export type Answer = {
  answer: number;
  hasErrors: boolean;
  index: number;
};
type Props = {
  questions: Q[];
};
const Test: React.FC<Props> = ({ questions }) => {
  const [timerActive, setTimerActive] = useState<boolean>(true);
  const [listMode, setListMode] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [answersInput, setAnswerInput] = useState<number>();
  const [error, setError] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const currentQuestion = questions[index];
  const isFinished = index === questions.length - 1;

  const refreshPage = () => {
    window.location.reload();
  };

  const handleAnswer = () => {
    if (answersInput === currentQuestion.correctAnswer) {
      setIndex((prev) => prev + 1);
      setAnswerInput(undefined);
      setAnswers((prev) => [
        ...prev,
        { index, hasErrors: error, answer: answersInput },
      ]);
      setError(false);

      if (isFinished) {
        setTimerActive(false);
        setListMode(true);
      }
    } else {
      setError(true);
    }
  };

  const handleNbr = (nbr: number) => {
    const newNbr = parseInt(`${answersInput ?? ""}${nbr}`);
    if (newNbr >= 1000) {
      return;
    } else {
      setAnswerInput(newNbr);
    }
  };

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ListToggle setListMode={setListMode} />

      <div
        style={{
          backgroundColor: "",
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
        }}
      >
        <Timer active={timerActive} />
        <button
          onClick={refreshPage}
          type="button"
          style={{
            padding: "4px 8px",
            borderRadius: "8px",
            backgroundColor: "darkblue",
          }}
        >
          restart
        </button>
      </div>

      {listMode ? (
        <QuestionsList questions={questions} answers={answers} />
      ) : (
        <div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Question
                {...{
                  a: currentQuestion.a,
                  b: currentQuestion.b,
                  sign: currentQuestion.sign,
                }}
              />
              <h1 style={{ marginLeft: "12px", fontSize: "3rem" }}>
                {answersInput}
              </h1>
            </div>
            <h2>{error ? "❌" : " "}</h2>
          </div>

          <div style={{}}>
            {isFinished ? null : (
              <Numpad
                onDelete={() => {
                  setAnswerInput(undefined);
                }}
                onSubmit={() => handleAnswer()}
                handleNumber={(nbr) => handleNbr(nbr)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
