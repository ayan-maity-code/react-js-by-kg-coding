import css from './Item.module.css'
function Item ({foodItem}){

  let handleBuyButton=()=>{
return console.log(`${foodItem} item being bought`)
  }
return (
  <li className={`${css["kg-item"]} list-group-item`}>
  <span className={css["kg-span"]}>{foodItem}</span>
  <button className={`${css.button} btn btn-info`}
  onClick={handleBuyButton}
  >Buy</button>
</li>
);
}

export default Item;