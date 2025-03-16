import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/question?difficulty=medium");
      setQuestion(response.data);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const handleAnswer = (answer) => {
    if (answer === question.correct_answer) {
      setFeedback("🎉 Correct! 🎉");
    } else {
      setFeedback("❌ Incorrect! Try Again.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Quiz Time!</h2>
      {question ? (
        <>
          <h3>{question.question}</h3>
          {question.answers.map((opt, index) => (
            <button key={index} onClick={() => handleAnswer(opt)}>
              {opt}
            </button>
          ))}
          <p>{feedback}</p>
          <button onClick={fetchQuestion}>Next Question</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;
