export interface QuestionProps {
  kana: string;
};

export const QuestionFrame: React.FC<QuestionProps> = (QuestionProps) => {
  return (
    <div className="bg-pink-100 w-3/4 h-2/4 mt-4 flex items-center justify-center">
      <div>
        <p>{QuestionProps.kana}</p>
      </div>
    </div>
  )
}
