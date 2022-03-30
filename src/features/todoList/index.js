import { useSelector, shallowEqual } from "react-redux";
import TodoListItem from "./todoListItem";

export default function TodoList() {
  const selectTodoIds = (state) => state.todo.todos.map((todo) => todo.id);
  const todoIds = useSelector(selectTodoIds, shallowEqual);

  return (
    <div className="todo-list">
      {todoIds.map((id) => (
        <TodoListItem key={id} id={id} />
      ))}
    </div>
  );
}
