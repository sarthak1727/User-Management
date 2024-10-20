import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  localStorage.setItem("token", response.data.token);
  return response.data;
});

export const register = createAsyncThunk("auth/register", async (userData) => {
  const response = await api.post("/auth/register", userData);
  localStorage.setItem("token", response.data.token);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
