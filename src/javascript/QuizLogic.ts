import { hiragana, hiraganaContractions, hiraganaDakuten, hiraganaDakutenContractions } from "../data/hiragana";
import { katakana, katakanaContractions, katakanaDakuten, katakanaDakutenContractions } from "../data/katakana";

/**
 * Takes an array, shuffles it, and returns it.
 */
const getShuffledArray = (array: any): any => {
  return array.sort((a, b) => 0.5 - Math.random());
};

/**
 * Takes an array and returns a random element.
 */
const getRandomAnswer = (array: string[][]) => {
  const randomNumber: number = Math.floor(Math.random() * (array.length));
  return array[randomNumber][0];
};

/**
 * Takes an array of questions and a number of possible answers.
 * Creates a list of quiz entries, each containing the question (kana), correct answer (en), and an array of <number> answers (one correct, rest incorrect).
 * Returns an array of arrays. Each inner array is a quiz entry, which reads like: [['あ', 'a', ['be', 'to', 'ka', 'a']], etc.].
 */
const createQuiz = (array: string[][], count: number) => {
  const quizContents: string[] = [];
  array.forEach(element => {
    const answerList: string[] = [element[0]];
    let counter = 0;
    do {
      let randomAnswer: string = getRandomAnswer(array);
      if (!answerList.includes(randomAnswer)) {
        answerList.push(randomAnswer);
        counter ++;
      };
    } while (counter < count); // ensures 4 answer choices
    const quizQuestion: any = [element[1], element[0], getShuffledArray(answerList)];
    quizContents.push(quizQuestion);
  });
  return quizContents;
};

/**
 * Starts the quiz - prepares all the data
 */
const startQuiz = (array: string[][], batchSize: number) => {
  const shuffledData: string[][] = getShuffledArray(array);
  const quizList: string[] | string[][] = createQuiz(shuffledData, batchSize);
  return quizList;
};

export const quizList = startQuiz(hiragana, 3);
