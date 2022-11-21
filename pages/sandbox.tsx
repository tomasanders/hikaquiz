import type { NextPage } from "next";
import { questionList, quizMaker } from "./javascript/quizLogic";
import { QuizCard } from "./components/QuizCard";

const TestPage: NextPage = (props) => {
  const showQuiz = () => {
    const quizList = quizMaker(questionList);
    console.log(quizList, "question list")
  }

  return (
    <div className="flex flex-col items-start justify-start bg-slate-300 p-4 gap-4 text-center">
      <h1 className="text-center w-full">Sandbox</h1>

      <QuizCard />
    </div>
  )
}

export default TestPage;
