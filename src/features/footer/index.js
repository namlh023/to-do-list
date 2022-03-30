import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { todoClearCompleted } from "../todoList/todoSlice";
import { filterStatusChanged, StatusFilters } from "./filterSlice";

export default function Footer() {
  const dispatch = useDispatch();
  const totalItem = useSelector((state) => state.todos.todos.length);
  const onStatusChange = (status) => dispatch(filterStatusChanged(status));

  return (
    <div className="footer">
      <div className="items">{totalItem} items left</div>
      <button
        className="footer__btn clear-btn"
        onClick={() => dispatch(todoClearCompleted())}
      >
        Clear Completed
      </button>
      <ul>
        <li>
          <button
            onClick={() => onStatusChange(StatusFilters.All)}
            className="footer__btn filter-btn"
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => onStatusChange(StatusFilters.Active)}
            className="footer__btn filter-btn"
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => onStatusChange(StatusFilters.Completed)}
            className="footer__btn filter-btn"
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
}
