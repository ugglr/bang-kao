export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/*
##### PLUS #####
0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
2: [0, 1, 2, 3, 4, 5, 6, 7, 8]
3: [0, 1, 2, 3, 4, 5, 6, 7]
4: [0, 1, 2, 3, 4, 5, 6]
5: [0, 1, 2, 3, 4, 5]
6: [0, 1, 2, 3, 4]
7: [0, 1, 2, 3]
8: [0, 1, 2]
9: [0, 1]
10: [0]
##### MINUS #####
0: [0]
1: [0, 1]
2: [0, 1, 2]
3: [0, 1, 2, 3]
4: [0, 1, 2, 3, 4]
5: [0, 1, 2, 3, 4, 5]
6: [0, 1, 2, 3, 4, 5, 6]
7: [0, 1, 2, 3, 4, 5, 6, 7]
8: [0, 1, 2, 3, 4, 5, 6, 7, 8]
9: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
10: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

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
