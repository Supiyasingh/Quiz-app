import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizItem from "./QuizItem";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch quiz data directly from the API URL
    fetch('https://sleepy-sudsy-glockenspiel.glitch.me/api/questions') // Direct API URL
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        console.log(data); // Log the data to check its structure
        setQuestions(data.questions || []); // Assuming questions are in the 'questions' field
      })
      .catch((error) => console.error("Error fetching quiz questions:", error)); // Handle any errors
  }, []); // Empty dependency array to run this effect only once when the component mounts

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    navigate("/result", { state: { answers } });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>📝 Take the Quiz</h2>
      {questions.map((q, index) => (
        <QuizItem key={q.id} question={q} index={index + 1} onSelect={handleAnswerSelect} />
      ))}
      <button onClick={handleSubmit} style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}>
        Submit Quiz
      </button>
    </div>
  );
}

export default Quiz;
