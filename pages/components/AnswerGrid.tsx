import { AnswerFrame } from "./AnswerFrame"

export const AnswerGrid = () => {
  return (
    <div className="grid items-center justify-center gap-4">
      <div className="flex items-center justify-center gap-4">
        <AnswerFrame />
        <AnswerFrame />
      </div>
      <div className="flex items-center justify-center gap-4">
        <AnswerFrame />
        <AnswerFrame />
      </div>
    </div>
  )
}
