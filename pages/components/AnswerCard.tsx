interface Props {
  answer: string;
};

export const AnswerCard: React.FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-center p-4 text-large bg-purple-400 border-2 border-solid border-purple-800 rounded-lg text-slate-200">
      <h5 className="font-bold">{props.answer}</h5>
    </div>
  )
}
