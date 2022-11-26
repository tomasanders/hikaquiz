import type { NextPage } from "next";
import { quizList } from "../src/javascript/QuizLogic";
import { useState, useRef } from "react";
import { QuestionFrame } from "../src/components/QuestionFrame";
import { AnswerFrame } from "../src/components/AnswerFrame";
import { FourAnswerFrame } from "../src/components/FourAnswerFrame";

const TestPage: NextPage = (props) => {
  const counter = useRef(0); // useRef to preserve value between refreshes
  const [count, setCount] = useState(counter.current);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isCorrect, setIsCorrect] = useState('default');

  const loadQuiz = () => {
    setQuizStarted(true);
  };

  const nextQuestion = () => {
    counter.current = counter.current + 1;
    setCount(counter.current);
  };

  return (
    <div className="quiz-wrap">
      <h1 className="title">HiKa QUIZ</h1>

      <button className="start-btn" onClick={loadQuiz}>START</button>

      <QuestionFrame
        text={quizStarted === true ? quizList[counter.current][0] : ""}
        correctOpacity={"0"}
        incorrectOpacity={"0"}
      />

      {quizStarted === true && <div className="answer-wrap">
        <button className={`answer-tile bg-${isCorrect}`}>{quizList[counter.current][2][0]}</button>
        <button className={`answer-tile bg-${isCorrect}`}>{quizList[counter.current][2][1]}</button>
        <button className={`answer-tile bg-${isCorrect}`}>{quizList[counter.current][2][2]}</button>
        <button className={`answer-tile bg-${isCorrect}`}>{quizList[counter.current][2][3]}</button>
      </div>}

      <button className="start-btn" onClick={nextQuestion}>Counter: {counter.current}</button>
    </div>
  );
};

export default TestPage;
