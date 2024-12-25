import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
// import userReducer from "../features/user/userSlice";
import { apiSlice } from "./slices/apiSlice.js";

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        // user: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: process.env.NODE_ENV !== "production",
    });
    
export default store;
