import { useDispatch, useSelector } from "react-redux";
import { todoDeleted, todoCompleted, selectTodoById } from "./todoSlice";
import iconClose from "../../assets/images/icon-cross.svg";

export default function TodoListItem({ id }) {
  const dispatch = useDispatch();

  const todoById = useSelector((state) => selectTodoById(state, id));

  return (
    <div className="todo-item">
      <input
        onChange={() => dispatch(todoCompleted(id))}
        className="todo-item__input"
        type="checkbox"
        defaultChecked={todoById[0]?.completed}
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
