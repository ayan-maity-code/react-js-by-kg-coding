import TodoItem from "./TodoItem";
function TodoItems({Todoitem}){
  return(
    <>
    <div className="items-container">
      {Todoitem.map((item)=>{
        return(
          <TodoItem key={Math.random() * 10} todo={item.name} todoDate={item.dueDate}></TodoItem> 
        )
      })}
      </div>
    </>
  );
}

export default TodoItems;