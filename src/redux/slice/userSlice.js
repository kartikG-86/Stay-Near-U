import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails, loginUser, registerUser } from "../../api";

const initialState = {
    users: [],
    user: {},
    isLoading: false,
    isAuthenticated: false,
    error: null
}

export const userSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        }
    },
    extraReducers(builder){
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
            state.user = action.payload;
            state.isLoading = false;
            state.isAuthenticated = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.error.message;
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.error.message;
        })
        .addCase(getUserDetails.pending, (state) => {
            state.isLoading = true;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(getUserDetails.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        })
        .addCase(getUserDetails.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
        })
    }
});

export const { clearError, logout } = userSlice.actions;