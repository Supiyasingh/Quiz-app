import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 Welcome to the Quiz App!</h1>
      <p>Test your knowledge and challenge yourself with our quiz.</p>
      <button onClick={() => navigate("/login")} style={{ padding: "10px", fontSize: "16px" }}>
        Login
      </button>
    </div>
  );
}

export default Home;
