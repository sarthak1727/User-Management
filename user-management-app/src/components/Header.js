import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import "../styles/Header.css";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          User Management
        </Link>
        <ul>
          {!isAuthenticated && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <Link to="/home">Dashboard</Link>
              </li>
              <li>
                <button onClick={() => dispatch(logout())}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
