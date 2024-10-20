import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to User Management App</h1>
      <p>
        User Management System for <span className="sukriti">Sukriti Social Foundation!</span>
      </p>
      <div className="cta-buttons">
        <Link to="/login">Login</Link>
        <Link to="/register" className="secondary-cta">
          Register
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
