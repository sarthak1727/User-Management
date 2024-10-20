import React from "react";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";
import "../styles/HomePage.css";

function HomePage() {
  
  const users = useSelector((state) => state.users.list);

  return (
    <div className="home-page">
      <h1>User Management Dashboard</h1>
      <p className="welcome-message">Welcome!</p>
      <div className="user-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <div className="stat-value">{users.length}</div>
        </div>
        {/* Add more stat cards as needed */}
      </div>
      <UserList />
    </div>
  );
}

export default HomePage;
