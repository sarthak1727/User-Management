import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await api.get("/users");
  return response.data;
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData) => {
    const response = await api.put(`/users/${userData._id}`, userData);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    await api.delete(`/users/${userId}`);
    return userId;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (user) => user._id === action.payload._id
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user._id !== action.payload);
      });
  },
});

export default usersSlice.reducer;
