import styles from './FoodInput.module.css';
function FoodInput(){
  return <input type="text" placeholder='Enter food item' 
  className={styles.foodinput}
  onChange={(event) => console.log(event.target.value)}
  />
}

export default FoodInput;