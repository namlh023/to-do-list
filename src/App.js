import "./assets/sass/main.scss";
import Header from "./features/header";
import TodoInput from "./features/todoInput";
import TodoList from "./features/todoList";
import Footer from "./features/footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <TodoInput />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
