import { quizList } from "../javascript/quizLogic";
import { useState, useRef } from "react";

export const QuizCard = () => {
  const [question, setQuestion] = useState();
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();
  const [quizStarted, setQuizStarted] = useState(false);
  const answerCardClasses = "p-4 border border-solid rounded w-full transition-colors bg-blue-200 border-blue-800";

  // This sets the initial state of the quizHandler, based on quizList.
  const quizHandler = () => {
    setQuestion(quizList[0][0]);
    setAnswer1(quizList[0][2][0]);
    setAnswer2(quizList[0][2][1]);
    setAnswer3(quizList[0][2][2]);
    setAnswer4(quizList[0][2][3]);
    setQuizStarted(true);
  };

  // This increments whenever an answer is processed, and moves to the next question in the quizList. Also updates the question and answer values.
  const counter = useRef(0); // useRef to preserve value between refreshes
  const [count, setCount] = useState(counter.current);
  const increment = () => {
    counter.current = counter.current + 1;
    setCount(counter.current);
    setQuestion(quizList[counter.current][0]);
    setAnswer1(quizList[counter.current][2][0]);
    setAnswer2(quizList[counter.current][2][1]);
    setAnswer3(quizList[counter.current][2][2]);
    setAnswer4(quizList[counter.current][2][3]);
  };

  const answerHandler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      increment();
    } else {
      e.target.innerText = "X"
      // return;
    };
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-300 p-4 gap-4 w-full">
      <button className="px-4 py-2 bg-purple-400 border border-solid border-purple-800 rounded" onClick={quizHandler}>Start Quiz</button>
      <div className="flex items-center justify-center bg-green-200 w-full">
        <h5 className="font-bold text-xl bg-blue-200 border-2 border-solid border-blue-800 p-4 w-full rounded">{question}</h5>
      </div>
      <div className="flex items-center justify-center gap-4 bg-pink-200 w-full">
        <button className={answerCardClasses} onClick={answerHandler}>{answer1}</button>
        <button className={answerCardClasses} onClick={answerHandler}>{answer2}</button>
      </div>
      <div className="flex items-center justify-center gap-4 bg-orange-200 w-full">
        <button className={answerCardClasses} onClick={answerHandler}>{answer3}</button>
        <button className={answerCardClasses} onClick={answerHandler}>{answer4}</button>
      </div>
      {quizStarted && <p className="w-100 text-center">Question: {count + 1}/{quizList.length}</p>}
    </div>
  );
};
