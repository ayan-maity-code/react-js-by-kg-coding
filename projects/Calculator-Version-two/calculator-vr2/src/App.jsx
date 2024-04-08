import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css"
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {

const [calVal , setCalVal] = useState("")
const onButtonclick = (buttonText) => {
  if(buttonText === "C"){
      setCalVal("")
  } else if(buttonText === "="){
        setCalVal(eval(calVal))
  } else{
    setCalVal(calVal + buttonText)
  }
}
    return(
      <div className={styles.calculator}>

      <Display displayValue ={calVal}></Display>
      <ButtonsContainer
      onButtonClick={onButtonclick}
      ></ButtonsContainer>
    </div>
    )
  
}

export default App
