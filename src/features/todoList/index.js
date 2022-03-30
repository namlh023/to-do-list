import { useSelector, shallowEqual } from "react-redux";
import TodoListItem from "./todoListItem";
import { StatusFilters } from "../footer/filterSlice";

export default function TodoList() {
  const selectCurrentStatus = (state) => state.filters.status;
  const currentStatus = useSelector(selectCurrentStatus);

  // const selectTodoIds = (state) => state.todos.todos.map((todo) => todo.id);

  const selectTodoIds = (state) =>
    state.todos.todos.reduce((todoIds, todo) => {
      if (currentStatus === StatusFilters.Active && todo.completed === "true") {
        return todoIds;
      }
      if (
        currentStatus === StatusFilters.Completed &&
        todo.completed === "false"
      ) {
        return todoIds;
      }
      todoIds.push(todo.id);
      return todoIds;
    }, []);

  const todoIds = useSelector(selectTodoIds, shallowEqual);

  return (
    <div className="todo-list">
      {todoIds.map((id) => (
        <TodoListItem key={id} id={id} />
      ))}
    </div>
  );
}
