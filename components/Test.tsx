import { useState } from "react";
import ListToggle from "./ListToggle";
import { Question as Q } from "../util";
import Question from "./Question";
import QuestionsList from "./QuestionsList";
import Numpad from "./Numpad";
import Timer from "./Timer";
import Result from "./Result";
import Lottie from "react-lottie";

import styles from "./Test.module.scss";
import confettiLottie from "../public/lotties/confetti.json";

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: confettiLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

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
  const isFinished = index === questions.length;

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
    <div className={styles.container}>
      <ListToggle setListMode={setListMode} />

      <div className={styles.timerContainer}>
        <Timer active={timerActive} />
        <button
          onClick={refreshPage}
          type="button"
          className={styles.resetButton}
        >
          从新开始
        </button>
      </div>

      {listMode ? (
        <QuestionsList questions={questions} answers={answers} />
      ) : isFinished ? (
        <>
          <Result answers={answers} />
          <div className={styles.lottieContainer}>
            <Lottie options={lottieOptions} />
          </div>
        </>
      ) : (
        <div className={styles.inputContainer}>
          <div className={styles.digitContainer}>
            <div className={styles.questionContainer}>
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

          <div style={{ maxWidth: "252px" }}>
            <Numpad
              onDelete={() => {
                setAnswerInput(undefined);
              }}
              onSubmit={() => handleAnswer()}
              handleNumber={(nbr) => handleNbr(nbr)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
