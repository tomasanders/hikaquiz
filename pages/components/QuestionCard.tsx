interface Props {
  question: string;
};

export const QuestionCard: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-center p-6 text-xl bg-blue-400 border-2 border-solid border-blue-800 rounded-lg text-slate-200">
      <h5 className="font-bold">{props.question}</h5>
    </div>
  )
}
