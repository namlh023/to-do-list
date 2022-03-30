import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

const initialState = {
  todos: [
    {
      id: 1,
      completed: true,
      content: "Complete Javascript course",
    },
    {
      id: 2,
      completed: false,
      content: "Complete React course",
    },
    {
      id: 3,
      completed: false,
      content: "Complete Vue.js course",
    },
    {
      id: 4,
      completed: false,
      content: "Complete Svelte course",
    },
    {
      id: 5,
      completed: false,
      content: "Complete Jquery course",
    },
  ],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    todoAdded(state, action) {
      state.todos.push({
        id: nextTodoId(state.todos),
        completed: false,
        content: action.payload,
      });
    },
    todoDeleted(state, action) {
      _.remove(state.todos, function (todo) {
        return todo.id === action.payload;
      });
    },
    todoCompleted(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = true;
    },
    todoClearCompleted(state) {
      _.remove(state.todos, function (todo) {
        return todo.completed === true;
      });
    },
  },
});

export const { todoAdded, todoDeleted, todoCompleted, todoClearCompleted } =
  TodoSlice.actions;

export default TodoSlice.reducer;
