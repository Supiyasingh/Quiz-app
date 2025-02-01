
import { useState } from "react";

function QuizItem({ question, index, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option) => {
    // Set the selected option
    setSelectedOption(option);

    // Check if the selected option is correct by comparing with 'answer'
    const isAnswerCorrect = option === question.answer;
    setIsCorrect(isAnswerCorrect);

    // Call the onSelect handler passed from parent (Quiz) component
    onSelect(question.id, option);
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "left" }}>
      {/* Display the question text */}
      <h3>{index}. {question.question}</h3>

      <div>
        {/* Display each option as a button */}
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(option)} // Handle option selection
            style={{
              display: "block", 
              margin: "5px", 
              padding: "10px", 
              fontSize: "16px", 
              width: "100%",
              backgroundColor: option === selectedOption
                ? isCorrect
                  ? "green"
                  : "red"
                : "", // Change button color based on correctness
              color: option === selectedOption ? "white" : "black",
            }}
          >
            {option} {/* Option text */}
          </button>
        ))}
      </div>

      {/* Show feedback message after an option is selected */}
      {selectedOption && (
        <p style={{ color: isCorrect ? "green" : "red" }}>
          {isCorrect ? "Correct!" : "Incorrect"}
        </p>
      )}
    </div>
  );
}

export default QuizItem;
