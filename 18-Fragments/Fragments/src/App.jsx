import React from "react";
import FoodItems from "./Components/FoodItem";
import "./index.css";
import ErrorMesage from "./Components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  let foodItems = ["Dal", "Roti", "Salad", "Vegetables"];
  // let foodItems = [];
  // if (foodItems.length === 0) {
  //   return <h3>i am still hungry</h3>;
  // }
  return (
    // <React.Fragment>
    <>
    <Container>
      <h1 className="food-heading">Healthy food</h1>
      <ErrorMesage items = {foodItems}></ErrorMesage>
      <FoodInput></FoodInput>
      <FoodItems itemss={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repudiandae facilis, tempora sint veniam veritatis delectus, temporibus cum eveniet eum doloremque rerum voluptate.</p>
      </Container>
      </>
    // </React.Fragment>
  );
}

export default App;
