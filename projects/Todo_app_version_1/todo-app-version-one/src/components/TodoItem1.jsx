function Todoitem1() {
  let todo = "Buy Milk";
  let todoDate = "04/10/24";
  return (
    <>
      <div class="row">
        <div class="col-6">{todo}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todoitem1;
