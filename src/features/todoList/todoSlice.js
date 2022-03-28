import { createSlice } from "@reduxjs/toolkit";

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
  name: "todo",
  initialState: initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
    // todoDeleted(state, action) {
    //   state.push(action.payload);
    // },
  },
});

export default TodoSlice.reducer;
