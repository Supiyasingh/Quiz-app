
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL_SUBMIT = "https://sleepy-sudsy-glockenspiel.glitch.me/api/submit"; // Submit answers and get score
// If you need to fetch user results, use this API (when you have userId).
// const API_URL_RESULT = "https://sleepy-sudsy-glockenspiel.glitch.me/api/result/:userId"; 

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location.state || !location.state.answers) {
      setError("No answers received.");
      setLoading(false);
      return;
    }

    // Submit answers to the backend to get the score
    axios
      .post(API_URL_SUBMIT, { answers: location.state.answers })
      .then((res) => {
        setScore(res.data.score); // Set score received from the response
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError("There was an error processing your result.");
        setLoading(false); // Stop loading even on error
        console.error(err);
      });
  }, [location.state]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>📊 Quiz Results</h2>

      {/* Display loading, error, or score */}
      {loading ? (
        <p>Loading results...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p>You scored: <strong>{score}</strong></p>
      )}

      <button onClick={() => navigate("/")} style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}>
        Try Again
      </button>
    </div>
  );
}

export default Result;

