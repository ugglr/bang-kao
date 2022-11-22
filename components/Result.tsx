import { Answer } from "./Test";

type Props = {
  answers: Answer[];
};
const Result: React.FC<Props> = ({ answers }) => {
  const nbrOfQuestions = answers?.length ?? 0;
  const nbrOfCorrect = answers.map((ans) => ans.hasErrors === false).length;

  console.log("nbrOfQuestions: ", nbrOfQuestions);
  console.log("nbrOfCorrect: ", nbrOfCorrect);
  return (
    <div>
      <div style={{ fontSize: "2.5rem", marginTop: "2rem" }}>
        {nbrOfCorrect}/{nbrOfQuestions}
      </div>
    </div>
  );
};

export default Result;
