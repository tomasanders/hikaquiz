import type { NextPage } from "next";
import { useState, useRef } from "react";
import { prepareQuiz } from "../src/javascript/QuizLogic";
import { hiragana } from "../src/data/hiragana";
import { katakana } from "../src/data/katakana";

const TestPage: NextPage = (props) => {
  const [batchSize, setBatchSize] = useState(3); // Sets the number of possible answer tiles.
  const [quizStarted, setQuizStarted] = useState(false); // Sets the quiz as started/not started.
  const [quizContent, setQuizContent] = useState('hiragana'); // Sets the quiz content.

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

          <button className={"btn"} onClick={() => {prepareQuiz(quizContent, batchSize); setQuizStarted(true)}}>START QUIZ</button>
        </div>
      }
      {/* End Options Menu */}

      {/* Quiz Wrapper */}
      { quizStarted === true &&
        <div className="quiz">

          {/* Question Frame */}
          <div className="question flex-group">
            <span className="question__text">Q</span>
          </div>
          {/* End Question Frame */}

          {/* Answer Grid */}
          <div className="answers">
            <button className={`${batchSize === 3 ? "pb-4" : "pb-8"}`}>A1</button>
            <button className={`${batchSize === 3 ? "pb-4" : "pb-8"}`}>A2</button>
            <button className={`${batchSize === 3 ? "pb-4" : "pb-8"}`}>A3</button>
            <button className={`${batchSize === 3 ? "pb-4" : "pb-8"}`}>A4</button>
            { batchSize === 7 &&
              <>
                <button className="pb-8">A5</button>
                <button className="pb-8">A6</button>
                <button className="pb-8">A7</button>
                <button className="pb-8">A8</button>
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
    </div>
  )
};

export default TestPage;
