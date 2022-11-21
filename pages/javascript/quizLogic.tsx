import { hiragana } from "../data/hiragana";
import { katakana } from "../data/katakana";

/**
 * Shuffles an array
 * returns array (nested)
 */
const theShuffler = (array) => {
  const shuffledStuff = array.sort((a, b) => 0.5 - Math.random());
  return shuffledStuff;
};

/**
 * Gets a random answer from the quiz data.
 * returns string
 * FUTURE: update so that the '46' is based on the length of the quiz data list - update typescript
 *
 */
const getRandomAnswer = (array, length) => {
  const randomNumber = Math.floor(Math.random() * length);
  const randomAnswer = array[randomNumber][0];
  return randomAnswer;
};

/**
 * Creates a list of quiz entries, each containing the question (kana), correct answer (en), and an array of 4 answers (one correct, three incorrect).
 *
 * Takes in an array (questionList) -> shuffled via theShuffler()
 *
 * Returns an array of arrays. Each inner array is a quiz entry, which reads like: [['あ', 'a', ['be', 'to', 'ka', 'a']], etc.].
 * returns array (nested)
 *
 * FUTURE: update 'counter' to change based on how many answer choices the user selects
 */
const quizMaker = (array) => {
  const quizList = [];
  array.forEach(element => {
    const finalQuestion = [element[1], element[0]];
    const answerList = [element[0]];
    let counter = 0;
    do {
      let random = getRandomAnswer(array, 46);
      if (!answerList.includes(random)) {
        answerList.push(random);
        counter ++;
      };
    } while (counter < 3); // ensures 4 answer choices
    const shuffledAnswers = theShuffler(answerList);
    finalQuestion.push(shuffledAnswers);
    quizList.push(finalQuestion);
  });
  return quizList;
};

/**
 * Starts the quiz - prepares all the data
 */
const startQuiz = () => {
  const shuffledQuiz = theShuffler(hiragana);
  const quizList = quizMaker(shuffledQuiz);
  return quizList;
};

export const quizList = startQuiz();
