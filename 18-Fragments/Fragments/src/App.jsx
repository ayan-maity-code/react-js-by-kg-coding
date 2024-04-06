import React from "react";
import FoodItems from "./Components/FoodItem";
import "./App.css";
import ErrorMesage from "./Components/ErrorMsg";

function App() {
  let foodItems = ["Dal", "Roti", "Salad", "Vegetables"];
  // let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h3>i am still hungry</h3>;
  // }
  return (
    // <React.Fragment>
    <>
      <h1>Healthy food</h1>
      <ErrorMesage items = {foodItems}></ErrorMesage>
      <FoodItems itemss={foodItems}></FoodItems>
    </>
    // </React.Fragment>
  );
}

export default App;
