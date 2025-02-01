import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password123") {
      localStorage.setItem("user", "true");
      navigate("/quiz"); // Redirect to Quiz Page
    } else {
      alert("Invalid credentials! Try admin/1234.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🔑 Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin} style={{ padding: "10px", fontSize: "16px" }}>
        Submit
      </button>
    </div>
  );
}

export default Login;
