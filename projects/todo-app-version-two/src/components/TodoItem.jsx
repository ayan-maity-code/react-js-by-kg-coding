function TodoItem({todo , todoDate}) {
  return (
    <>
      <div class="row kg-row">
        <div class="col-6">{todo}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
