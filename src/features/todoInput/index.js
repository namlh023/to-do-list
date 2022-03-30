import { useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoInput() {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    const trimText = e.target.value.trim();
    if (trimText && e.which === 13) {
      console.log("ENTER");
      setText("");
    }
  };

  return (
    <div className="todo-input">
      <div className="cirlce"></div>
      <input
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
}
