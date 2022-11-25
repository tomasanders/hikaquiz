export const AnswerFrame = (props) => {
  return (
    <button className={`answer-tile ${props.color}`} onClick={answerHandler} key={index.toString()}>
      {props.text}
    </button>
  )
}
