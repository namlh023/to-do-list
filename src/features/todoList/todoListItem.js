import { useDispatch, useSelector } from "react-redux";
import { todoDeleted, todoCompleted } from "./todoSlice";
import iconClose from "../../assets/images/icon-cross.svg";

export default function TodoListItem({ id }) {
  const dispatch = useDispatch();
  const selectTodoById = (state) =>
    state.todos.todos.filter((todo) => todo.id === id);
  const todoById = useSelector(selectTodoById);

  return (
    <div className="todo-item">
      <input
        onClick={() => dispatch(todoCompleted(id))}
        className="todo-item__input"
        type="checkbox"
      />
      <p className="todo-item__content">{todoById[0]?.content}</p>
      <button
        className="todo-item__btn"
        onClick={() => dispatch(todoDeleted(id))}
      >
        <img src={iconClose} alt="" aria-hidden="true" />
      </button>
    </div>
  );
}
