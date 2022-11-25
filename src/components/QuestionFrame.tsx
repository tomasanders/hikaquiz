interface QuestionProps {
  text: string,
  correctOpacity: string,
  incorrectOpacity: string,
};

export const QuestionFrame: React.FC<QuestionProps> = (props) => {
  return (
    <div className="question-wrap">
      <h5>{props.text}</h5>
      <h5 className={`correct-msg shadow-correct ${props.correctOpacity}`}>
        Correct!
      </h5>
      <h5 className={`correct-msg shadow-incorrect ${props.incorrectOpacity}`}>
        Too Bad!
      </h5>
    </div>
  );
};
