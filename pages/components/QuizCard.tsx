import { quizList } from "../javascript/quizLogic";
import { useState, useRef } from "react";

export const QuizCard = () => {

  // State assignments
  const [question, setQuestion] = useState();
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();
  const [quizStarted, setQuizStarted] = useState(false);
  const [answer1Style, setAnswer1Style] = useState('bg-[#F7B85C]');
  const [answer2Style, setAnswer2Style] = useState('bg-[#F7B85C]');
  const [answer3Style, setAnswer3Style] = useState('bg-[#F7B85C]');
  const [answer4Style, setAnswer4Style] = useState('bg-[#F7B85C]');
  const [correct, setCorrect] = useState('');

  // This sets the initial state of the quizHandler, based on quizList.
  const quizHandler = () => {
    setQuestion(quizList[0][0]);
    setAnswer1(quizList[0][2][0]);
    setAnswer2(quizList[0][2][1]);
    setAnswer3(quizList[0][2][2]);
    setAnswer4(quizList[0][2][3]);
    setQuizStarted(true);
  };

  // This increments whenever a correct answer is processed, and moves to the next question in the quizList. Also updates the question and answer values and resets the answer card style.
  const counter = useRef(0); // useRef to preserve value between refreshes
  const [count, setCount] = useState(counter.current);
  const increment = () => {
    counter.current = counter.current + 1;
    setCount(counter.current);
    setTimeout(() => {
      setCorrect('');
      setAnswer1Style('bg-default');
      setAnswer2Style('bg-default');
      setAnswer3Style('bg-default');
      setAnswer4Style('bg-default');
      setQuestion(quizList[counter.current][0]);
      setAnswer1(quizList[counter.current][2][0]);
      setAnswer2(quizList[counter.current][2][1]);
      setAnswer3(quizList[counter.current][2][2]);
      setAnswer4(quizList[counter.current][2][3]);
    }, 1000);
  };

  // These change the answer card to red if incorrect and green if correct. This needs to be changed since it's too repetitive.
  const answer1Handler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setAnswer1Style('bg-correct');
      setCorrect("Correct!");
      increment();
    } else {
      setAnswer1Style('bg-incorrect');
    };
  };
  const answer2Handler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setAnswer2Style('bg-correct');
      setCorrect("Correct!");
      increment();
    } else {
      setAnswer2Style('bg-incorrect');
    };
  };
  const answer3Handler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setAnswer3Style('bg-correct');
      setCorrect("Correct!");
      increment();
    } else {
      setAnswer3Style('bg-incorrect');
    };
  };
  const answer4Handler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setAnswer4Style('bg-correct');
      setCorrect("Correct!");
      increment();
    } else {
      setAnswer4Style('bg-incorrect');
    };
  };

  return (
    <div className="quiz-wrap">
      <h1 className="title">HiKa QUIZ</h1>
      <button className="start-btn" onClick={quizHandler}>START</button>
      <div className="question-wrap">
        <h5>{question}</h5>
        <h5 className="correct-msg">{correct}</h5>
      </div>
      <div className="answer-wrap">
        <button className={`answer-tile ${answer1Style}`} onClick={answer1Handler}>{answer1}</button>
        <button className={`answer-tile ${answer2Style}`} onClick={answer2Handler}>{answer2}</button>
      </div>
      <div className="answer-wrap">
        <button className={`answer-tile ${answer3Style}`} onClick={answer3Handler}>{answer3}</button>
        <button className={`answer-tile ${answer4Style}`} onClick={answer4Handler}>{answer4}</button>
      </div>
      {quizStarted && <p className="question-count">QUESTION: {count + 1}/{quizList.length}</p>}
    </div>
  );
};
