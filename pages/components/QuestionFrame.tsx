
export const QuestionFrame = (props) => {
  return (
    <div className="question-wrap">
      <h5>{props.question}</h5>
      <h5 className={`correct-msg shadow-correct ${props.correctMsg}`}>
        Correct!
      </h5>
      <h5 className={`correct-msg shadow-incorrect ${props.incorrectMsg}`}>
        Too Bad!
      </h5>
    </div>
  );
};
