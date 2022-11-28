import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef, useState } from "react";

// Data Imports
import { hiraganaObject } from "../src/data/hiraganaObject";
import { katakanaObject } from "../src/data/katakanaObject";
// Logic Import
import { prepareQuiz } from "../src/javascript/Logic";

const Home: NextPage = () => {

  // Quiz Contents
  const list = useRef("x"); // Quiz contents
  const [data, setData] = useState([]); // State - quiz contents
  const [batch, setBatch] = useState(3); // State - # possible answers (3/7)
  const [content, setContent] = useState('hiragana'); // State - quiz type (hiragana/katakana/both)
  const [secondChance, setSecondChance] = useState(true); // State - allows a second guess if first is incorrect
  // Counters
  // Tracks which question we're on
  const counter = useRef(0);
  const [count, setCount] = useState(counter.current);
  // Tracks correct/incorrect answers
  const correctCounter = useRef(0);
  const [scoreCorrect, setScoreCorrect] = useState(correctCounter.current);
  const incorrectCounter = useRef(0);
  const [scoreIncorrect, setScoreIncorrect] = useState(incorrectCounter.current);
  const [score, setScore] = useState(100); // Helps calculate score
  // Style-Related
  const [started, setStarted] = useState(false); // State - quiz started/not started
  const [font, setFont] = useState('ff-noto'); // State - font CSS class
  // State - answer tile background color via CSS class
  const [a0Bg, setA0Bg] = useState("default");
  const [a1Bg, setA1Bg] = useState("default");
  const [a2Bg, setA2Bg] = useState("default");
  const [a3Bg, setA3Bg] = useState("default");
  const [a4Bg, setA4Bg] = useState("default");
  const [a5Bg, setA5Bg] = useState("default");
  const [a6Bg, setA6Bg] = useState("default");
  const [a7Bg, setA7Bg] = useState("default");
  // State - opacity of praise messages via CSS class
  const [correctMsg, setCorrectMsg] = useState('opacity-0');
  const [incorrectMsg, setIncorrectMsg] = useState('opacity-0');
  const [tryAgainMsg, setTryAgainMsg] = useState('opacity-0');
  // Text
  const [question, setQuestion] = useState(""); // State - question text
  // State - answer text
  const [a0, setA0] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");
  const [a6, setA6] = useState("");
  const [a7, setA7] = useState("");

  /**
   * Increments the counter to move through the quiz.
   * Resets praise message opacity and tile colors.
   * Manages 'secondChance'
   * Sets the score.
   */
  const increment = () => {
    counter.current = counter.current + 1;
    setCount(counter.current);
    setSecondChance(true);
    setTimeout(() => {
      setCorrectMsg('opacity-0');
      setIncorrectMsg('opacity-0');
      setScore(Math.round(((correctCounter.current / (correctCounter.current + incorrectCounter.current)) * 100)));
      resetAnswerBg();
      setText();
    }, 1000);
  };

  /**
   * Resets answer tile background color.
   */
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

  /**
   * Fetches the data according to the user preferences.
   * @param content: string - "hiragana" | "katakana" | "both"
   * @param batch: number - 3 | 7
   */
  function getData() {
    const tested = prepareQuiz(content, batch);
    list.current = tested;
    setData(list.current);
  };

  /**
   * Updates question and answer text.
   */
  function setText() {
    setQuestion(list.current[counter.current][0]);
    setA0(list.current[counter.current][3][0]);
    setA1(list.current[counter.current][3][1]);
    setA2(list.current[counter.current][3][2]);
    setA3(list.current[counter.current][3][3]);
    setA4(list.current[counter.current][3][4]);
    setA5(list.current[counter.current][3][5]);
    setA6(list.current[counter.current][3][6]);
    setA7(list.current[counter.current][3][7]);
  };

  /**
   * Toggles praise message and increments scorekeeping. Then moves to the next question.
   * @param type: string - "correct" | "incorrect"
   */
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

  /**
   * Toggles 'secondChance' and flashes 'Try Again!' message.
   */
  function tryAgain() {
    setSecondChance(false);
    setTryAgainMsg('opacity-1');
    setTimeout(() => {
      setTryAgainMsg('opacity-0');
    }, 500);
  };

  /**
   * Checks the answer, then sets background color, updates the score, and handles incorrect answers.
   * @param id: number - corresponds to answer card ID
   */
  function handleAnswer(id: number) {
    switch(id) {
      case 0:
        if (a0 === list.current[counter.current][1]) {
          setA0Bg('correct');
          updateScore("correct");
        } else {
          setA0Bg('incorrect');
          setA0(replaceAnswer(a0));
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
          setA1(replaceAnswer(a1));
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
          setA2(replaceAnswer(a2));
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
          setA3(replaceAnswer(a3));
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
          setA4(replaceAnswer(a4));
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
          setA5(replaceAnswer(a5));
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
          setA6(replaceAnswer(a6));
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
          setA7(replaceAnswer(a7));
          secondChance === true ? tryAgain() : updateScore("incorrect");
        };
        break
    };
  };

  /**
   * Runs functionds to start the quiz.
   */
  function startQuiz() {
    getData();
    setStarted(true);
    setText();
  };

  /**
   * Matches the 'en' value on the tile with the corresponding 'en' value in the data, then returns the 'ja' value.
   * @param answer: string - the 'en' value
   * @returns: string - the 'ja' value
   */
  function replaceAnswer(answer) {
    let checked;
    if (list.current[counter.current][2] === "h") {
      checked = (Object.values(hiraganaObject[answer]))[1];
    } else {
      checked = (Object.values(katakanaObject[answer]))[1];
    };
    return checked;
  }

  return (
    <div className="app">
      <Head>
        <title>ひカ</title>
        <meta name="description" content="A Simple Hiragana and Katakana Quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="app__title">HiKa QUIZ</h1>

      {/* Options Menu */}
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
          <button className="btn ff-mono" onClick={startQuiz}>START QUIZ</button>
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
          <button className="btn ff-mono" onClick={() => window.location.reload(false)}>OPTIONS</button>
        </div>
      }
      {/* End Quiz Wrapper */}
    </div>
  );
};

export default Home
