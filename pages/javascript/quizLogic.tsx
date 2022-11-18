import { hiragana } from "../data/hiragana";
/**
 * TODO:
 *
 * Create quiz logic
 *    Grab hiragana object and move data into questions array
 *    Questions array should have the .en and .ja data
 *    Then should shuffle the order
 *    Then grab the first question and answer, along with 3 random answers (no repeats) and shuffle
 *    Put question in question box and answers in answer boxes
 *
 *    On click, the tile should check if the .en matches the .en data for the question
 *    If so, correct and move to next question - if not, remove that tile and try again (preserve space for removed tile)
 *    If correct, move to next question - if not, highlight correct answer and move to next question
 *
 *    Once quiz is finished, score screen
 *        Number correct (first try)
 *        Number correct (second try)
 *        Number correct (total)
 *        Percent correct (first and second try)
 */

// Start with setting up 4 questions
// Grab all the question keys
const hiraganaKeys = Object.keys(hiragana);
const hiraganaLength = hiraganaKeys.length;

// gets a single question and answer pair
const getQuestionObject = () => {
  const randomNumber = Math.floor(Math.random() * hiraganaLength);
  const questionObject = hiragana[hiraganaKeys[randomNumber]];
  return questionObject;
};

// takes the questionObject and creates the fullQuestion array
const getAnswers = () => {
  // define the array
  let fullQuestion = [];
  // get the questionObject
  const question = getQuestionObject();
  // add the question (fullQuestion[0])
  fullQuestion.push(question.ja);
  // add the correct answer (fullQuestion[1])
  fullQuestion.push(question.en);
  // get the first wrong answer and push if it's not a duplicate
  let wrongAnswer1 = getQuestionObject();
  if (fullQuestion.includes(wrongAnswer1.en)) {
    wrongAnswer1 = getQuestionObject();
  } else {
    fullQuestion.push(wrongAnswer1.en);
  }
  // get the second wrong answer and push if it's not a duplicate
  let wrongAnswer2 = getQuestionObject();
  if (fullQuestion.includes(wrongAnswer2.en)) {
    wrongAnswer2 = getQuestionObject();
  } else {
    fullQuestion.push(wrongAnswer2.en);
  }
  // get the third wrong answer and push if it's not a duplicate
  let wrongAnswer3 = getQuestionObject();
  if (fullQuestion.includes(wrongAnswer3.en)) {
    wrongAnswer3 = getQuestionObject();
  } else {
    fullQuestion.push(wrongAnswer3.en);
  }
  return fullQuestion;
}

export {getAnswers};
