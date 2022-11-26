import type { NextPage } from "next";
import { useState, useRef } from "react";
import { prepareQuiz } from "../src/javascript/QuizLogic";

const TestPage: NextPage = (props) => {
  const [batchSize, setBatchSize] = useState(3); // Sets the number of possible answer tiles.
  const [quizStarted, setQuizStarted] = useState(false); // Sets the quiz as started/not started.
  const [quizContent, setQuizContent] = useState('hiragana'); // Sets the quiz content.

  const counter = useRef(0); // useRef to preserve the value between refreshes.
  const [count, setCount] = useState(counter.current);

  const [question, setQuestion] = useState(""); // Sets the question text
  const [correctAnswer, setCorrectAnswer] = useState(""); // Sets the correct answer
  const masterList: any = []; // Holds all the quiz data

  // Answer text for all answers
  const [a0, setA0] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");
  const [a6, setA6] = useState("");
  const [a7, setA7] = useState("");
  // Status for all answers
  const [a0Status, setA0Status] = useState("default");
  const [a1Status, setA1Status] = useState("default");
  const [a2Status, setA2Status] = useState("default");
  const [a3Status, setA3Status] = useState("default");
  const [a4Status, setA4Status] = useState("default");
  const [a5Status, setA5Status] = useState("default");
  const [a6Status, setA6Status] = useState("default");
  const [a7Status, setA7Status] = useState("default");

  /**
   * Sets the first question and answers.
   */
  function firstQuestion() {
    setQuestion(masterList[0][counter.current][0]);
    setCorrectAnswer(masterList[0][counter.current][1]);
    setA0(masterList[0][counter.current][2][0]);
    setA1(masterList[0][counter.current][2][1]);
    setA2(masterList[0][counter.current][2][2]);
    setA3(masterList[0][counter.current][2][3]);
    if (batchSize === 7) {
      setA4(masterList[0][counter.current][2][4]);
      setA5(masterList[0][counter.current][2][5]);
      setA6(masterList[0][counter.current][2][6]);
      setA7(masterList[0][counter.current][2][7]);
    };
  };



  function handleAnswer(id: number, counter: number) {
    switch(id) {
      case 0:
        a0 === correctAnswer ? setA0Status('correct') : setA0Status('incorrect');
        break;
      case 1:
        a1 === correctAnswer ? setA1Status('correct') : setA1Status('incorrect');
        break;
      case 2:
        a2 === correctAnswer ? setA2Status('correct') : setA2Status('incorrect');
        break;
      case 3:
        a3 === correctAnswer ? setA3Status('correct') : setA3Status('incorrect');
        break;
      case 4:
        a4 === correctAnswer ? setA4Status('correct') : setA4Status('incorrect');
        break;
      case 5:
        a5 === correctAnswer ? setA5Status('correct') : setA5Status('incorrect');
        break;
      case 6:
        a6 === correctAnswer ? setA6Status('correct') : setA6Status('incorrect');
        break;
      case 7:
        a7 === correctAnswer ? setA7Status('correct') : setA7Status('incorrect');
        break;
    }
  };

    /**
   * Sets up the initial state of the quiz.
   * Pulls data from QuizLogic.ts, toggles the quiz display, and sets the first question.
   */
     function startQuiz() {
      masterList.push(prepareQuiz(quizContent, batchSize));
      setQuizStarted(true);
      firstQuestion();
    };


  return (
    <div className="app">
      <h1 className="app__title">HiKa QUIZ</h1>

      {/* Options Menu - Shows before the quiz */}
      { quizStarted === false &&
        <div className="options">
          <div className="options__menu">
            <p className="options__header">Choose your options:</p>

            <p>How many possible answers would you like?</p>
            <div className="flex-group">
              <button className={`${batchSize === 3 ? 'bg-correct' : 'bg-white'}`} onClick={() => setBatchSize(3)}>4</button>
              <button className={`${batchSize === 7 ? 'bg-correct' : 'bg-white'}`} onClick={() => setBatchSize(7)}>8</button>
            </div>

            <p>What would you like to quiz on?</p>
            <div className="flex-group">
              <button className={`${quizContent === 'hiragana' ? 'bg-correct' : 'bg-white'}`} onClick={() => setQuizContent('hiragana')}>ひ</button>
              <button className={`${quizContent === 'katakana' ? 'bg-correct' : 'bg-white'}`} onClick={() => setQuizContent('katakana')}>カ</button>
              <button className={`${quizContent === 'both' ? 'bg-correct' : 'bg-white'}`} onClick={() => setQuizContent('both')}>ひ+カ</button>
            </div>

          </div>

          <button className={"btn"} onClick={startQuiz}>START QUIZ</button>
        </div>
      }
      {/* End Options Menu */}

      {/* Quiz Wrapper */}
      { quizStarted === true &&
        <div className="quiz">

          {/* Question Frame */}
          <div className="question flex-group">
            <span className="question__text">
              {question}
            </span>
          </div>
          {/* End Question Frame */}

          {/* Answer Grid */}
          <div className="answers">
            <button className={`pb-${batchSize} bg-${a0Status}`} onClick={(e) => handleAnswer(0, counter.current)}>{a0}</button>
            <button className={`pb-${batchSize} bg-${a1Status}`} onClick={(e) => handleAnswer(1, counter.current)}>{a1}</button>
            <button className={`pb-${batchSize} bg-${a2Status}`} onClick={(e) => handleAnswer(2, counter.current)}>{a2}</button>
            <button className={`pb-${batchSize} bg-${a3Status}`} onClick={(e) => handleAnswer(3, counter.current)}>{a3}</button>
            { batchSize === 7 &&
              <>
                <button className={`pb-7 bg-${a4Status}`} onClick={(e) => handleAnswer(4, counter.current)}>{a4}</button>
                <button className={`pb-7 bg-${a5Status}`} onClick={(e) => handleAnswer(5, counter.current)}>{a5}</button>
                <button className={`pb-7 bg-${a6Status}`} onClick={(e) => handleAnswer(6, counter.current)}>{a6}</button>
                <button className={`pb-7 bg-${a7Status}`} onClick={(e) => handleAnswer(7, counter.current)}>{a7}</button>
              </>
            }
          </div>
          {/* End Answer Grid */}
        </div>
      }
      {/* End Quiz Wrapper */}

      {/* Return to Options Button - shows when quiz started */}
      {quizStarted === true &&
        <button className="btn" onClick={() => setQuizStarted(false)}>
          BACK TO OPTIONS
        </button>
      }
      {/* End Return to Options Button */}
      {quizStarted === true &&
        <p>
          {counter.current}
        </p>
      }
    </div>
  )
};

export default TestPage;
