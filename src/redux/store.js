import { configureStore } from "@reduxjs/toolkit";
import { userSlice} from "./slice/userSlice";
import { pgSlice } from "./slice/pgSlice";

const store = configureStore({
    reducer:{
        users: userSlice.reducer,
        pg: pgSlice.reducer
    },
    devTools: process.env.NODE_ENV !== 'PRODUCTION',
    // devTools: false,
    // middleware: [...getDefaultMiddleware()],
})

export default store;