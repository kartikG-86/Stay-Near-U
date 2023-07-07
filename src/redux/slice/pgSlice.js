import { createSlice } from "@reduxjs/toolkit";
import { addPg, getAllPg } from "../../api";

const initialState = {
    pg: [],
    currentPg: {},
    isLoading: false,
    error: null
}

export const pgSlice = createSlice({
    name: 'pg',
    initialState,
    reducers: {},
    extraReducers (builder) {
        builder.addCase(addPg.pending,(state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(addPg.fulfilled,(state, action) => {
            state.pg.push(action.payload);
            state.isLoading = false;
        })
        .addCase(addPg.rejected,(state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        .addCase(getAllPg.pending,(state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getAllPg.fulfilled,(state, action) => {
            state.pg = action.payload;
            state.isLoading = false;
        })
        .addCase(getAllPg.rejected,(state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export const pgActions = pgSlice.actions;
