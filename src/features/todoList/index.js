import { useSelector, shallowEqual } from "react-redux";
import TodoListItem from "./todoListItem";
import { selectFilterTodoIds } from "./todoSlice";

export default function TodoList() {
  const todoIds = useSelector(selectFilterTodoIds, shallowEqual);

  return (
    <div className="todo-list">
      {todoIds.map((id) => (
        <TodoListItem key={id} id={id} />
      ))}
    </div>
  );
}
