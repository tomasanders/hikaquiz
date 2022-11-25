import type { NextPage } from "next";
import { quizList } from "./javascript/quizLogic";
import { useState, useRef } from "react";
import { QuestionFrame } from "./components/QuestionFrame";
import { AnswerFrame } from "./components/AnswerFrame";

const TestPage: NextPage = (props) => {
  const [question, setQuestion] = useState();
  const [quizStarted, setQuizStarted] = useState(false);
  const [correctOpacity, setCorrectOpacity] = useState('opacity-0');
  const [incorrectOpacity, setIncorrectOpacity] = useState('opacity-0');

  const quizHandler = () => {
    setQuestion(quizList[0][0]);
    setQuizStarted(true);
  };

  return (
    <div className="app-wrap">
      <div className="quiz-wrap">
        <h1 className="title">HiKa QUIZ</h1>
        <button className="start-btn" onClick={quizHandler}>START</button>
        <QuestionFrame question={question} correctMsg={correctOpacity} incorrectMsg={incorrectOpacity} />
        <div className="answer-wrap">
          <AnswerFrame color={'bg-default'} 
        </div>
      </div>
    </div>
  )
}

export default TestPage;
