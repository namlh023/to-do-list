import { createSlice } from "@reduxjs/toolkit";
import _, { result } from "lodash";
import { StatusFilters } from "../footer/filterSlice";

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

const todos = (state) => state.todos.todos;
const status = (state) => state.filters.status;

// export const selectTodoIds = (state) => todos(state).map((todo) => todo.id);

export const selectFilterTodoIds = function (state) {
  let result = [];
  const showAllTodos = status(state) === StatusFilters.All;
  if (showAllTodos) {
    result = todos(state).map((todo) => todo.id);
    return result;
  }

  const showCompletedTodos = status(state) === StatusFilters.Completed;
  if (showCompletedTodos) {
    result = todos(state).reduce((todosCompletedID, todo) => {
      if (todo.completed === true) {
        todosCompletedID.push(todo.id);
      }
      return todosCompletedID;
    }, []);
  }

  const showActiveTodos = status(state) === StatusFilters.Active;
  if (showActiveTodos) {
    result = todos(state).reduce((todosActiveID, todo) => {
      if (todo.completed === false) {
        todosActiveID.push(todo.id);
      }
      return todosActiveID;
    }, []);
  }

  return result;
};

export const selectTodoById = (state, id) =>
  todos(state).filter((todo) => todo.id === id);
