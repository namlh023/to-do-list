import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/todoList/todoSlice";

const store = configureStore({ reducer: { todo: appReducer } });

export default store;
