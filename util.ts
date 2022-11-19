export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export type Question = {
  a: number;
  b: number;
  sign: string;
  correctAnswer: number;
};
export const generateQuestions = (
  nbrOfQuestions: number,
  maxRange: number
): Question[] => {
  const numbers = [];

  for (let i = 0; i < nbrOfQuestions; i++) {
    const randomNumber = Math.random();

    if (randomNumber >= 0.5) {
      const a = randomIntFromInterval(0, maxRange);
      const b = randomIntFromInterval(0, maxRange - a);
      const correctAnswer = a + b;
      numbers.push({ a, b, sign: "+", correctAnswer });
    } else {
      const a = randomIntFromInterval(0, maxRange);
      const b = randomIntFromInterval(0, a);
      const correctAnswer = a - b;
      numbers.push({ a, b, sign: "-", correctAnswer });
    }
  }

  return numbers;
};
