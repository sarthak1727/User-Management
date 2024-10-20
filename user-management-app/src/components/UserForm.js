import React, { useState } from "react";
import "../styles/UserForm.css";

function UserForm({ user, onSubmit, onCancel }) {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ _id: user._id, name, email });
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">{user ? "Update" : "Add"} User</button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default UserForm;
