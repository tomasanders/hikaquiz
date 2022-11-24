import { quizList } from "../javascript/quizLogic";
import { useState, useRef } from "react";

export const QuizCard = () => {

  // State assignments
  // FUTURE: See if there's a way to refactor this into a smaller set of statements.

  // Sets the question
  const [qText, setQText] = useState();
  // Sets the answers (FUTURE: try to fit this into one variable)
  const [a1Text, setA1Text] = useState();
  const [a2Text, setA2Text] = useState();
  const [a3Text, setA3Text] = useState();
  const [a4Text, setA4Text] = useState();
  // Notes if the quiz has started (used to display question number and score)
  const [quizStarted, setQuizStarted] = useState(false);
  // Sets the answer card style (FUTURE: try to fit this into one variable)
  const [a1TextStyle, setA1TextStyle] = useState('bg-default');
  const [a2TextStyle, setA2TextStyle] = useState('bg-default');
  const [a3TextStyle, setA3TextStyle] = useState('bg-default');
  const [a4TextStyle, setA4TextStyle] = useState('bg-default');
  // Toggles the opacity for correct / incorrect messages
  const [correctMsg, setCorrectMsg] = useState('opacity-0');
  const [incorrectMsg, setIncorrectMsg] = useState('opacity-0');
  // Allows a second chance to answer if the first try is wrong, before moving to the next question.
  const [secondTry, setSecondTry] = useState(false);
  // Tracks the number of correct answers
  const correctCounter = useRef(0);
  const [qCorrect, setQCorrect] = useState(correctCounter.current);
  // Tracks the number of incorrect answers
  const incorrectCounter = useRef(0);
  const [qIncorrect, setQIncorrect] = useState(incorrectCounter.current);
  // Calculates the score
  const [qScore, setQScore] = useState(0);

  // Sets the initial state of the quizHandler, based on quizList.
  const quizHandler = () => {
    setQText(quizList[0][0]);
    setA1Text(quizList[0][2][0]);
    setA2Text(quizList[0][2][1]);
    setA3Text(quizList[0][2][2]);
    setA4Text(quizList[0][2][3]);
    setQuizStarted(true);
  };

  // Increments the counter, which loads the appropriate question and answers into the cards. Also resets the style of the cards between questions. Also flashes the correct/incorrect message. Also resets secondTry status.
  // FUTURE: See if there's a way to setAnswerStyle in one statement.
  const counter = useRef(0); // useRef to preserve value between refreshes
  const [count, setCount] = useState(counter.current);
  const increment = () => {
    counter.current = counter.current + 1;
    setCount(counter.current);
    setSecondTry(false); // Reset status of secondTry for next question.
    setTimeout(() => {
      setCorrectMsg('opacity-0');
      setIncorrectMsg('opacity-0');
      setQScore(Math.round(((correctCounter.current / (correctCounter.current + incorrectCounter.current)) * 100)));
      setA1TextStyle('bg-default');
      setA2TextStyle('bg-default');
      setA3TextStyle('bg-default');
      setA4TextStyle('bg-default');
      setQText(quizList[counter.current][0]);
      setA1Text(quizList[counter.current][2][0]);
      setA2Text(quizList[counter.current][2][1]);
      setA3Text(quizList[counter.current][2][2]);
      setA4Text(quizList[counter.current][2][3]);
    }, 1000);
  };

  // Changes the answer card to red if incorrect and green if correct.
  // FUTURE: Change these into one function (maybe something with id/key?)
  const a1TextHandler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setA1TextStyle('bg-correct');
      setCorrectMsg('opacity-1');
      correctCounter.current = correctCounter.current + 1;
      setQCorrect(correctCounter.current);
      increment();
    } else {
      setA1TextStyle('bg-incorrect');
      if (secondTry === true) {
        setIncorrectMsg('opacity-1');
        incorrectCounter.current = incorrectCounter.current + 1;
        setQIncorrect(incorrectCounter.current);
        increment();
      } else {
        setSecondTry(true); // Mark as already wrong
      };
    };
  };
  const a2TextHandler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setA2TextStyle('bg-correct');
      setCorrectMsg('opacity-1');
      correctCounter.current = correctCounter.current + 1;
      setQCorrect(correctCounter.current);
      increment();
    } else {
      setA2TextStyle('bg-incorrect');
      if (secondTry === true) {
        setIncorrectMsg('opacity-1');
        incorrectCounter.current = incorrectCounter.current + 1;
        setQIncorrect(incorrectCounter.current);
        increment();
      } else {
        setSecondTry(true); // Mark as already wrong
      };
    };
  };
  const a3TextHandler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setA3TextStyle('bg-correct');
      setCorrectMsg('opacity-1');
      correctCounter.current = correctCounter.current + 1;
      setQCorrect(correctCounter.current);
      increment();
    } else {
      setA3TextStyle('bg-incorrect');
      if (secondTry === true) {
        setIncorrectMsg('opacity-1');
        incorrectCounter.current = incorrectCounter.current + 1;
        setQIncorrect(incorrectCounter.current);
        increment();
      } else {
        setSecondTry(true); // Mark as already wrong
      };
    };
  };
  const a4TextHandler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setA4TextStyle('bg-correct');
      setCorrectMsg('opacity-1');
      correctCounter.current = correctCounter.current + 1;
      setQCorrect(correctCounter.current);
      increment();
    } else {
      setA4TextStyle('bg-incorrect');
      if (secondTry === true) {
        setIncorrectMsg('opacity-1');
        incorrectCounter.current = incorrectCounter.current + 1;
        setQIncorrect(incorrectCounter.current);
        increment();
      } else {
        setSecondTry(true); // Mark as already wrong
      };
    };
  };

  return (
    <div className="quiz-wrap">
      <h1 className="title">HiKa QUIZ</h1>
      <button className="start-btn" onClick={quizHandler}>START</button>
      <div className="question-wrap">
        <h5>{qText}</h5>
        <h5 className={`correct-msg shadow-correct ${correctMsg}`}>Correct!</h5>
        <h5 className={`correct-msg shadow-incorrect ${incorrectMsg}`}>Too Bad!</h5>
      </div>
      <div className="answer-wrap">
        <button className={`answer-tile ${a1TextStyle}`} onClick={a1TextHandler}>{a1Text}</button>
        <button className={`answer-tile ${a2TextStyle}`} onClick={a2TextHandler}>{a2Text}</button>
      </div>
      <div className="answer-wrap">
        <button className={`answer-tile ${a3TextStyle}`} onClick={a3TextHandler}>{a3Text}</button>
        <button className={`answer-tile ${a4TextStyle}`} onClick={a4TextHandler}>{a4Text}</button>
      </div>
      {quizStarted && <div className="score-wrap">
        <p className="question-count">QUESTION: {count + 1}/{quizList.length}</p>
        <p className="score">
            SCORE:
            <span className="correct-text">{qCorrect}</span>
            <span className="incorrect-text">{qIncorrect}</span>
            <span>{qScore}%</span>
          </p>
      </div>}
    </div>
  );
};
