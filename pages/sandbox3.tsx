import type { NextPage } from "next";
import { useRef, useState } from "react";
// Data Imports
import { hiragana } from "../src/data/hiragana";
// Logic Import
import { prepareQuiz } from "../src/javascript/Logic";


const TestPage: NextPage = (props) => {
  const list = useRef("x"); // All the quiz content [q, corr-a, type, [a1-8]].
  const [data, setData] = useState([]); // Stores the quiz data.
  const counter = useRef(0); // useRef to preserve value between refreshes.
  const [count, setCount] = useState(counter.current); // Stores the counter value.
  const [started, setStarted] = useState(false); // Signals the start of the quiz.
  const [batch, setBatch] = useState(3); // Sets the number of possible answer tiles.
  const [content, setContent] = useState('hiragana'); // Sets the quiz content.
  const [font, setFont] = useState('ff-noto'); // Sets the font style.
  const [question, setQuestion] = useState(""); // Sets the question text.
  const [type, setType] = useState(""); // Sets the type as hiragana/katakana.
  const [secondChance, setSecondChance] = useState(true); // Allows a second guess if answer is incorrect.
  // Toggles opacity for correct, incorrect, and try again messages.
  const [correctMsg, setCorrectMsg] = useState('opacity-0');
  const [incorrectMsg, setIncorrectMsg] = useState('opacity-0');
  const [tryAgainMsg, setTryAgainMsg] = useState('opacity-0');
  // Counters for scorekeeping
  const correctCounter = useRef(0);
  const [scoreCorrect, setScoreCorrect] = useState(correctCounter.current);
  const incorrectCounter = useRef(0);
  const [scoreIncorrect, setScoreIncorrect] = useState(incorrectCounter.current);
  const [score, setScore] = useState(100);

  // Answer text
  const [a0, setA0] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");
  const [a6, setA6] = useState("");
  const [a7, setA7] = useState("");
  // Background color for all answers
  const [a0Bg, setA0Bg] = useState("default");
  const [a1Bg, setA1Bg] = useState("default");
  const [a2Bg, setA2Bg] = useState("default");
  const [a3Bg, setA3Bg] = useState("default");
  const [a4Bg, setA4Bg] = useState("default");
  const [a5Bg, setA5Bg] = useState("default");
  const [a6Bg, setA6Bg] = useState("default");
  const [a7Bg, setA7Bg] = useState("default");

  // Increments the counter, which controls which question is displayed.
  const increment = () => {
    counter.current = counter.current + 1;
    setCount(counter.current); // Increment the counter.
    setSecondChance(true); // Reset status of secondChance for next question.
    setTimeout(() => {
      setCorrectMsg('opacity-0');
      setIncorrectMsg('opacity-0');
      setScore(Math.round(((correctCounter.current / (correctCounter.current + incorrectCounter.current)) * 100)));
      resetAnswerBg();
      setText();
    }, 1000);
  };

  // Resets the background of all the answer tiles
  function resetAnswerBg() {
    setA0Bg('default');
    setA1Bg('default');
    setA2Bg('default');
    setA3Bg('default');
    setA4Bg('default');
    setA5Bg('default');
    setA6Bg('default');
    setA7Bg('default');
  };

  // Gets the data from Logic.ts and updates data.state.
  function getData() {
    const tested = prepareQuiz(content, batch);
    list.current = tested;
    setData(list.current);
  };

  // Sets the text for questions and answers, as well as the type.
  function setText() {
    setQuestion(list.current[counter.current][0]);
    setType(list.current[counter.current][2]);
    setA0(list.current[counter.current][3][0]);
    setA1(list.current[counter.current][3][1]);
    setA2(list.current[counter.current][3][2]);
    setA3(list.current[counter.current][3][3]);
    setA4(list.current[counter.current][3][4]);
    setA5(list.current[counter.current][3][5]);
    setA6(list.current[counter.current][3][6]);
    setA7(list.current[counter.current][3][7]);
  };

  // Increases the correct/incorrect counters and sets the correct/incorrect message
  function updateScore(type: "correct" | "incorrect") {
    if (type === "correct") {
      setCorrectMsg('opacity-1');
      correctCounter.current = correctCounter.current + 1;
      setScoreCorrect(correctCounter.current);
    } else {
      setIncorrectMsg('opacity-1');
      incorrectCounter.current = incorrectCounter.current + 1;
      setScoreIncorrect(incorrectCounter.current);
    };
    increment();
  };

  // Flashes the 'try again' message and sets secondChance to false
  function tryAgain() {
    setSecondChance(false);
    setTryAgainMsg('opacity-1');
    setTimeout(() => {
      setTryAgainMsg('opacity-0');
    }, 500);
  };

  // Checks the answers, sets style based on correct/incorrect, increments.
  function handleAnswer(id: number) {
    switch(id) {
      case 0:
        if (a0 === list.current[counter.current][1]) {
          setA0Bg('correct');
          updateScore("correct");
        } else {
          setA0Bg('incorrect');
          // setA0(that tile's h/k)
          secondChance === true ? tryAgain() : updateScore("incorrect");
        };
        break
      case 1:
        if (a1 === list.current[counter.current][1]) {
          setA1Bg('correct');
          updateScore("correct");
          increment();
        } else {
          setA1Bg('incorrect');
          // setA1(that tile's h/k)
          secondChance === true ? tryAgain() : updateScore("incorrect");
        };
        break
      case 2:
        if (a2 === list.current[counter.current][1]) {
          setA2Bg('correct');
          updateScore("correct");
          increment();
        } else {
          setA2Bg('incorrect');
          // setA2(that tile's h/k)
          secondChance === true ? tryAgain() : updateScore("incorrect");
        };
        break
      case 3:
        if (a3 === list.current[counter.current][1]) {
          setA3Bg('correct');
          updateScore("correct");
          increment();
        } else {
          setA3Bg('incorrect');
          // setA3(that tile's h/k)
          secondChance === true ? tryAgain() : updateScore("incorrect");
        };
        break
      case 4:
        if (a4 === list.current[counter.current][1]) {
          setA4Bg('correct');
          updateScore("correct");
          increment();
        } else {
          setA4Bg('incorrect');
          // setA4(that tile's h/k)
          secondChance === true ? tryAgain() : updateScore("incorrect");
        };
        break
      case 5:
        if (a5 === list.current[counter.current][1]) {
          setA5Bg('correct');
          updateScore("correct");
          increment();
        } else {
          setA5Bg('incorrect');
          // setA5(that tile's h/k)
          secondChance === true ? tryAgain() : updateScore("incorrect");
        };
        break
      case 6:
        if (a6 === list.current[counter.current][1]) {
          setA6Bg('correct');
          updateScore("correct");
          increment();
        } else {
          setA6Bg('incorrect');
          // setA6(that tile's h/k)
          secondChance === true ? tryAgain() : updateScore("incorrect");
        };
        break
      case 7:
        if (a7 === list.current[counter.current][1]) {
          setA7Bg('correct');
          updateScore("correct");
          increment();
        } else {
          setA7Bg('incorrect');
          // setA7(that tile's h/k)
          secondChance === true ? tryAgain() : updateScore("incorrect");
        };
        break
    };
  };

  // Pulls the data via startQuiz(), updates 'started' and sets all the text via setText().
  function startQuiz() {
    getData();
    setStarted(true);
    setText();
  };

  return (
    <div className="app">
      <h1 className="app__title">HiKa QUIZ</h1>

{/* Options Menu - Shows before the quiz */}
      { started === false &&
        <div className="options">
          <div className="options__menu">
            <p className="options__header">OPTIONS</p>

            <p>Number of Possible Answers</p>
            <div className="flex-group">
              <button className={`${batch === 3 ? 'bg-correct' : 'bg-white'}`} onClick={() => setBatch(3)}>4</button>
              <button className={`${batch === 7 ? 'bg-correct' : 'bg-white'}`} onClick={() => setBatch(7)}>8</button>
            </div>

            <p>Quiz Contents</p>
            <div className="flex-group">
              <button className={`${content === 'hiragana' ? 'bg-correct' : 'bg-white'}`} onClick={() => setContent('hiragana')}>ひ</button>
              <button className={`${content === 'katakana' ? 'bg-correct' : 'bg-white'}`} onClick={() => setContent('katakana')}>カ</button>
              <button className={`${content === 'both' ? 'bg-correct' : 'bg-white'}`} onClick={() => setContent('both')}>ひ+カ</button>
            </div>

            <p>Font Style</p>
            <div className="flex-group">
              <button className={`${font === 'ff-rock' ? 'bg-correct' : 'bg-white'} ff-rock`} onClick={() => setFont('ff-rock')}>ひカ</button>
              <button className={`${font === 'ff-mono' ? 'bg-correct' : 'bg-white'} ff-mono`} onClick={() => setFont('ff-mono')}>ひカ</button>
              <button className={`${font === 'ff-noto' ? 'bg-correct' : 'bg-white'} ff-noto`} onClick={() => setFont('ff-noto')}>ひカ</button>
            </div>

          </div>
          <button className="btn" onClick={startQuiz}>START QUIZ</button>
        </div>
      }
{/* End Options Menu */}

{/* Quiz Wrapper */}
      {started === true &&
        <div className="quiz">
    {/* Question Section */}
          <div className="question flex-group">
            <span className={`question__text ${font}`}>{question}</span>
            <span className={`question__msg shadow-correct ${correctMsg}`}>Correct!</span>
            <span className={`question__msg shadow-incorrect ${tryAgainMsg}`}>Try Again!</span>
            <span className={`question__msg shadow-incorrect ${incorrectMsg}`}>Too Bad...</span>
          </div>
    {/* End Question Section */}

    {/* Answer Section */}
          <div className="answers">
            <button className={`pb-${batch} bg-${a0Bg}`} onClick={(e) => handleAnswer(0)}>{a0}</button>
            <button className={`pb-${batch} bg-${a1Bg}`} onClick={(e) => handleAnswer(1)}>{a1}</button>
            <button className={`pb-${batch} bg-${a2Bg}`} onClick={(e) => handleAnswer(2)}>{a2}</button>
            <button className={`pb-${batch} bg-${a3Bg}`} onClick={(e) => handleAnswer(3)}>{a3}</button>
            { batch === 7 &&
              <>
                <button className={`pb-7 bg-${a4Bg}`} onClick={(e) => handleAnswer(4)}>{a4}</button>
                <button className={`pb-7 bg-${a5Bg}`} onClick={(e) => handleAnswer(5)}>{a5}</button>
                <button className={`pb-7 bg-${a6Bg}`} onClick={(e) => handleAnswer(6)}>{a6}</button>
                <button className={`pb-7 bg-${a7Bg}`} onClick={(e) => handleAnswer(7)}>{a7}</button>
              </>
            }
          </div>
    {/* End Answer Section */}

    {/* Scorekeeping Section */}
          <div className="score">
            <p className="score__count">QUESTION: {counter.current + 1}/{list.current.length}</p>
            <p className="score__details">
              SCORE:
              <span className="score__correct">{scoreCorrect}</span>
              <span className="score__incorrect">{scoreIncorrect}</span>
              <span>{score}%</span>
            </p>
          </div>
    {/* End Scorekeeping Section */}
        </div>
      }
{/* End Quiz Wrapper */}
    </div>
  );
};

export default TestPage;
