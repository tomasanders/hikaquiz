import type { NextPage } from "next";
import { useState, useRef } from "react";
import { quizList } from "../src/javascript/QuizLogic";

const TestPage: NextPage = (props) => {
  const [batchSize, setBatchSize] = useState(4); // Sets the number of possible answer tiles.
  const [quizStarted, setQuizStarted] = useState(false); // Sets the quiz as started/not started.



  return (
    <div className="quiz-wrap">
      <h1 className="title">HiKa Quiz</h1>

      { quizStarted === false && <p>Choose your options:</p>}

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
