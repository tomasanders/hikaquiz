export interface AnswerProps {
  english: string;
};

export const AnswerFrame: React.FC<AnswerProps> = (AnswerProps) => {
  return (
    <div>
      <div className="flex items-center justify-center bg-green-100">
        <p>{AnswerProps.english}</p>
      </div>
    </div>
  )
}
