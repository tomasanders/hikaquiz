import type { NextPage } from "next";
import { useState, useRef } from "react";
import { quizList } from "../src/javascript/QuizLogic";

const TestPage: NextPage = (props) => {
  const [batchSize, setBatchSize] = useState(4); // Sets the number of possible answer tiles.
  const [quizStarted, setQuizStarted] = useState(false); // Sets the quiz as started/not started.
  const [quizContent, setQuizContent] = useState('hiragana'); // Sets the quiz content.



  return (
    <div>
      <h1 className="title">HiKa Quiz</h1>

      { quizStarted === false &&
        <div className="options-menu">
          <p>Choose your options:</p>
          <p>How many possible answers would you like?</p>
          <div className="options-btn-wrap">
            <button onClick={() => setBatchSize(4)} className={`${batchSize === 4 ? 'bg-correct' : 'bg-default'}`}>4</button>
            <button onClick={() => setBatchSize(8)} className={`${batchSize === 8 ? 'bg-correct' : 'bg-default'}`}>8</button>
          </div>
          <p>What would you like to quiz on?</p>
          <div className="options-btn-wrap">
            <button onClick={() => setQuizContent('hiragana')} className={`${quizContent === 'hiragana' ? 'bg-correct' : 'bg-default'}`}>Hiragana</button>
            <button onClick={() => setQuizContent('katakana')} className={`${quizContent === 'katakana' ? 'bg-correct' : 'bg-default'}`}>Katakana</button>
            <button onClick={() => setQuizContent('both')} className={`${quizContent === 'both' ? 'bg-correct' : 'bg-default'}`}>Both</button>
          </div>
        </div>
      }

      {/* Question Frame */}
      { quizStarted === true &&
        <div className="question-wrap">
          <h5>Q</h5>
        </div>
      }
      {/* End Question Frame */}

      {/* Answer Grid */}
      { quizStarted === true &&
        <div className="answer-wrap">
          <button className="answer-tile">A1</button>
          <button className="answer-tile">A2</button>
          <button className="answer-tile">A3</button>
          <button className="answer-tile">A4</button>
          { batchSize === 8 &&
            <>
              <button className="answer-tile">A5</button>
              <button className="answer-tile">A6</button>
              <button className="answer-tile">A7</button>
              <button className="answer-tile">A8</button>
            </>
          }
        </div>
      }
      {/* End Answer Grid */}
    </div>
  )
};

export default TestPage;
