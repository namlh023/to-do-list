import { useSelector } from "react-redux";
import iconClose from "../../assets/images/icon-cross.svg";

export default function TodoListItem({ id }) {
  const selectTodoById = (state) =>
    state.todo.todos.filter((todo) => todo.id === id);
  const todoById = useSelector(selectTodoById);

  return (
    <div className="todo-item">
      <input className="todo-item__input" type="checkbox" />
      <p className="todo-item__content">{todoById[0]?.content}</p>
      <button className="todo-item__btn">
        <img src={iconClose} alt="" aria-hidden="true" />
      </button>
    </div>
  );
}
