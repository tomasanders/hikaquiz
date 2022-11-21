import { quizList } from "../javascript/quizLogic";
import { useState, useRef } from "react";

export const QuizCard = () => {
  // Class lists for various elements - will be changed later when components are created.
  const answerClassWrap = "p-4 transition-colors w-full h-full shadow-[4px_4px_#000] border-2 border-solid border-[#000]";
  const answerWrapClassWrap = "flex items-center justify-center gap-4 w-full h-1/5 text-[2rem]";
  const questionClassWrap = "flex items-center justify-center w-full h-1/4 relative shadow-[4px_4px_#000] bg-[#f7b85c] text-[3rem] font-bold  border-2 border-solid border-[#000]";

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
      setAnswer1Style('bg-[#F7B85C]');
      setAnswer2Style('bg-[#F7B85C]');
      setAnswer3Style('bg-[#F7B85C]');
      setAnswer4Style('bg-[#F7B85C]');
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
      setAnswer1Style('bg-[#34C1AA]');
      setCorrect("Correct!");
      increment();
    } else {
      setAnswer1Style('bg-[#E4724E]');
    };
  };
  const answer2Handler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setAnswer2Style('bg-[#34C1AA]');
      setCorrect("Correct!");
      increment();
    } else {
      setAnswer2Style('bg-[#E4724E]');
    };
  };
  const answer3Handler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setAnswer3Style('bg-[#34C1AA]');
      setCorrect("Correct!");
      increment();
    } else {
      setAnswer3Style('bg-[#E4724E]');
    };
  };
  const answer4Handler = (e) => {
    if (e.target.innerText === quizList[counter.current][1]) {
      setAnswer4Style('bg-[#34C1AA]');
      setCorrect("Correct!");
      increment();
    } else {
      setAnswer4Style('bg-[#E4724E]');
    };
  };

  return (
    <div className="flex flex-col items-center justify-start bg-[#FEECCA] p-4 gap-4 w-screen h-screen">
      <h1 className="font-extrabold text-[#000] text-5xl text-center">HiKa QUIZ</h1>
      <button className="px-4 py-2 bg-[#FFF] font-bold border-2 border-solid border-slate-800 shadow-[4px_4px_#000] w-full" onClick={quizHandler}>START</button>
      <div className={questionClassWrap}>
        <h5>{question}</h5>
        <h5 className="absolute bottom-0">{correct}</h5>
      </div>
      <div className={answerWrapClassWrap}>
        <button className={`${answerClassWrap} ${answer1Style}`} onClick={answer1Handler}>{answer1}</button>
        <button className={`${answerClassWrap} ${answer2Style}`} onClick={answer2Handler}>{answer2}</button>
      </div>
      <div className={answerWrapClassWrap}>
        <button className={`${answerClassWrap} ${answer3Style}`} onClick={answer3Handler}>{answer3}</button>
        <button className={`${answerClassWrap} ${answer4Style}`} onClick={answer4Handler}>{answer4}</button>
      </div>
      {quizStarted && <p className="w-100 text-center text-sm font-bold">QUESTION: {count + 1}/{quizList.length}</p>}
    </div>
  );
};


//background: #FEECCA

// Correct: #34C1AA
// Incorrect: #E4724E
// Neutral: #F7B85C
