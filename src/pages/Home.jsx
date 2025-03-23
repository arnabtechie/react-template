import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Our App</h1>
      <p>This is the landing page. Please login to continue.</p>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
};

export default Home;
