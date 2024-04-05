import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem1 from "./components/TodoItem1";
import Todoitem2 from "./components/TodoItem2";
import "./App.css";
function App() {
  return (
    <>
      <center class="todo-container">
        <AppName />
      </center>
      <div class="container text-center">
        <AddTodo />
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </>
  );
}

export default App;
