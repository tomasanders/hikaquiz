import { hiragana } from "../data/hiragana";
import { katakana } from "../data/katakana";

// Shuffle a list. This takes the list and looks for either a positive or negative number to move the item 'up' or 'down' in the array. This isn't a perfect way to shuffle, but it works.
const theShuffler = (array) => {
  const shuffledStuff = array.sort((a, b) => 0.5 - Math.random());
  return shuffledStuff;
};

// Gets a random answer from the list
const getRandomAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 46);
  const randomAnswer = questionList[randomNumber][0];
  return randomAnswer;
};

// Create the Shuffled Questions List
// TODO: Add function to create a custom list based on settings
// hiragana/katakana read like: [['a', 'あ'],[etc.]]
export const questionList = theShuffler(hiragana);

// Create the quiz questions. Takes in questionList and loops over it, creating a question (['あ', 'a', ['ta', 'chi', 'ke', 'a']]) for each, with unique values. Then shuffles the answers list and pushes them to quizList.
export const quizMaker = (array) => {
  const quizList = [];
  array.forEach(element => {
    const finalQuestion = [element[1], element[0]];
    const answerList = [element[0]];
    let counter = 0;
    do {
      let random = getRandomAnswer();
      if (!answerList.includes(random)) {
        answerList.push(random);
        counter ++;
      };
    } while (counter < 3);
    finalQuestion.push(answerList);
    quizList.push(finalQuestion);
  });
  return quizList;
};















// PSEUDOCODE

// Get the list of quiz questions (en/ja pairs)
// For each question
//    copy the 'en' to a new array
//    push 3 random unique answers to the new array
//    shuffle the answers array
//    create an array that's ['question', 'corr-ans',   ['ans1', 'ans2', 'ans3', 'ans4']]
// Push each complete question/answer to a new Quiz
