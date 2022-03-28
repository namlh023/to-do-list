export default function Footer() {
  return (
    <div className="footer">
      <div className="items">5 items left</div>
      <button className="footer__btn clear-btn">Clear Completed</button>
      <ul>
        <li>
          <button className="footer__btn filter-btn">All</button>
        </li>
        <li>
          <button className="footer__btn filter-btn">Active</button>
        </li>
        <li>
          <button className="footer__btn filter-btn">Completed</button>
        </li>
      </ul>
    </div>
  );
}
