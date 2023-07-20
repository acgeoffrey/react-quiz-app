function Options({ question, dispatch, answer, index }) {
  const hasAnswered = answer[index] !== undefined;

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer[index] ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
