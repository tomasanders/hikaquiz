import { hiragana } from "../data/hiragana";
import { katakana } from "../data/katakana";

/**
 * Shuffles an array.
*/
const shuffleArray = (array: any) => {
  return array.sort((a: unknown, b: unknown) => 0.5 - Math.random());
};

/**
 * Returns a random array from hiragana/katakana list. [en, ja, tag]
*/
const getRandom = (array: string[][]) => {
  const randomNumber: number = Math.floor(Math.random() * (array.length));
  return array[randomNumber][0];
};

/**
 * Creates an array of quiz questions and possible answers.
 * Takes an array (selected from options menu) and batch (selected from options menu).
 * Return format is: [[ja, en, tag, ['a0' ... 'ax']], [repeat]]
*/
const createQuizContents = (array: string[][], batch: number) => {
  let quizContents: string[][] = [];
  array.forEach(element => {
    const answerList = [element[0]] // make sure the correct answer is inside the answer list
    let counter = 0;
    do {
      let randomAnswer: string = getRandom(array);
      if (!answerList.includes(randomAnswer)) {
        answerList.push(randomAnswer);
        counter ++;
      };
    } while (counter < batch); // ensures {batch} + 1 answer choices
    quizContents.push([element[1], element[0], element[2], shuffleArray(answerList)]);
  });
  return quizContents;
};

/**
 * Gets the data for the quiz and formats it via createQuizContents()
*/
const prepareQuiz = (content: string, batch: number) => {
  let quizList: any = [];
  let shuffledData: any;
  if (content === "both") {
    const combined = hiragana.concat(katakana);
    shuffledData = shuffleArray(combined);
    quizList = createQuizContents(shuffledData, batch);
  } else if (content === "hiragana") {
    shuffledData = shuffleArray(hiragana);
    quizList = createQuizContents(shuffledData, batch);
  } else if (content === "katakana") {
    shuffledData = shuffleArray(katakana);
    quizList = createQuizContents(shuffledData, batch);
  };
  return quizList;
};

export { prepareQuiz };
