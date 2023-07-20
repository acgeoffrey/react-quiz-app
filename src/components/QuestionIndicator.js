function QuestionIndicator({ num, dispatch, index }) {
  return (
    <button
      className={`btn-qi ${index === num ? "btn-qi-active" : ""}`}
      onClick={() => dispatch({ type: "jumpQuestion", payload: num })}
    >
      {num + 1}
    </button>
  );
}

export default QuestionIndicator;
