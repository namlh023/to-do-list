import iconTheme from "../../assets/images/icon-moon.svg";

export default function Header() {
  return (
    <div className="header">
      <h1 className="h1-like">TO DO</h1>
      <img className="theme-icon" src={iconTheme} alt="" aria-hidden="true" />
    </div>
  );
}
