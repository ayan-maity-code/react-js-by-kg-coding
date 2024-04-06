import Item from "./Item";
function FoodItems({itemss}) {
  return (
    <>
      <ul className="list-group">
        {itemss.map((item) => {
          return (
          <Item key={item} foodItem ={item}></Item>
          );
        })}
      </ul>
    </>
  );
}

export default FoodItems;
