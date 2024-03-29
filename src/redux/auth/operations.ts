import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { CredentialsLogin } from "../../components/LoginForm/LoginForm";
import { CredentialsRegister } from "../../components/RegisterForm/RegisterForm";
import { setIsLogoutModal } from "../global/slice";

interface AuthStateType {
  auth: {
    token: string | null;
  };
}

axios.defaults.baseURL = "https://soyummy-api.onrender.com/api/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: CredentialsRegister, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      Notify.success("Registration successful.");
      return response.data;
    } catch (error: any) {
      error.response.data.message === "Email in use"
        ? Notify.failure("The provided email is already in use.")
        : Notify.failure("Registration failed.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: CredentialsLogin, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);
      Notify.success("Logged in successfully.");
      return response.data;
    } catch (error: any) {
      Notify.failure("Invalid email or password.");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("users/logout", async (_, thunkAPI) => {
  try {
    await axios.get("/users/logout");
    Notify.success("Logged out successfully.");
    thunkAPI.dispatch(setIsLogoutModal(false));
    clearAuthHeader();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as AuthStateType;
    const persistedToken = state.auth.token || "";
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "auth/uploadImage",
  async ({ image }: { image: string }, thunkAPI) => {
    try {
      const response = await axios.post("/users/uploadImage", {
        image,
      });
      Notify.success("Your image has been uploaded");
      return response.data.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUsername = createAsyncThunk(
  "auth/updateUsername",
  async ({ username }: { username: string }, thunkAPI) => {
    try {
      const response = await axios.post("/users/updateUsername", {
        username,
      });
      Notify.success("Your name has been uploaded");
      return response.data.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
