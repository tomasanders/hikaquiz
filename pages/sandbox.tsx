import type { NextPage } from "next";
import { } from "./javascript/quizLogic";
import { hiragana } from "./data/hiragana";

const TestPage: NextPage = (props) => {
  return (
    <div className="grid items-start justify-center w-screen bg-slate-300 p-4 gap-4">
      <h1>Sandbox</h1>

      <button>
        Test
      </button>
    </div>
  )
}

export default TestPage;
