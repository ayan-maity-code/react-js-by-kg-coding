import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Todoitems from "./components/TodoItems";
function App() {

  const todoitems = [

    {
      name: "Buy milk",
      dueDate:"10/02/24"
    },
    {
      name:"Go to school",
      dueDate:"13/08/24"
    }
  ];
  return (
    <>
      <center class="todo-container">
        <AppName />
        <AddTodo />
      </center>
      <Todoitems Todoitem={todoitems}></Todoitems>
    </>
  );
}

export default App;
