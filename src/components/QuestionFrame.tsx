interface QuestionProps {
  text: string,
  correctOpacity: "0" | "1",
  incorrectOpacity: "0" | "1",
};

export const QuestionFrame: React.FC<QuestionProps> = (props) => {
  return (
    <div className="question-wrap">
      <h5>{props.text}</h5>
      <h5 className={`correct-msg shadow-correct ${props.correctOpacity === "1" && "opacity-1"} ${props.correctOpacity === "0" && "opacity-0"}`}>
        Correct!
      </h5>
      <h5 className={`correct-msg shadow-incorrect ${props.incorrectOpacity === "1" && "opacity-1"} ${props.incorrectOpacity === "0" && "opacity-0"}`}>
        Too Bad!
      </h5>
    </div>
  );
};
