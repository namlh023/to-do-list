import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoList/todoSlice";
import filterReducer from "../features/footer/filterSlice";

const store = configureStore({
  reducer: { todos: todoReducer, filters: filterReducer },
});

export default store;
