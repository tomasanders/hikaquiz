import type { NextPage } from "next";
import { QuizCard } from "./components/QuizCard";

const TestPage: NextPage = (props) => {
  return (
    <div className="app-wrap">
      <QuizCard />
    </div>
  )
}

export default TestPage;
