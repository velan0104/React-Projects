import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/reduxSlice'

export const store = configureStore({
    reducer: todoReducer,
})
