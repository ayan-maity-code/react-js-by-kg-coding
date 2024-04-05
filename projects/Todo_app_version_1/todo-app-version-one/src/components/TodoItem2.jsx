function Todoitem2() {
  let todo = "Buy Coffee";
  let todoDate = "06/08/24";
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

export default Todoitem2;
