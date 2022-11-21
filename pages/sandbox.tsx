import type { NextPage } from "next";
import { questionList, quizMaker } from "./javascript/quizLogic";
import { QuizCard } from "./components/QuizCard";

const TestPage: NextPage = (props) => {
  const showQuiz = () => {
    const quizList = quizMaker(questionList);
    console.log(quizList, "question list")
  }

  return (
    <div>
      <QuizCard />
    </div>
  )
}

export default TestPage;
