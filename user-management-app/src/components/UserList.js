import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  updateUser,
  deleteUser,
} from "../features/users/usersSlice";
import UserForm from "./UserForm";
import "../styles/UserList.css";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = (userData) => {
    dispatch(updateUser(userData));
    setEditingUser(null);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  return (
    <div className="user-list card">
      <h2>User List</h2>
      {editingUser ? (
        <UserForm
          user={editingUser}
          onSubmit={handleUpdate}
          onCancel={handleCancel}
        />
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <div className="user-info">
                <strong>{user.name}</strong> ({user.email})
              </div>
              <div className="user-actions">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
