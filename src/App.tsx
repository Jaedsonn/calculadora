import Input from "./components/Input";
import Button from "./components/Button";
import { Row } from "./style";
import { Content, Container } from "./style";
import "./global.css";
import { useState } from "react";

export function App() {
const [currentNumber, setCurrentNumber] = useState("0");
const [firstNumber, setFirstNumber] = useState("0");
const [operation, setOperaion] = useState("")

const handleClear = ():void =>{
  setCurrentNumber("0")
}
const handleAddNumber = (num:string):void =>{
  setCurrentNumber(prev => `${prev === "0"? '':prev}${num}`)
}

const handleSumNumbers = ():void =>{
  if(firstNumber === "0"){
    setFirstNumber(currentNumber)
    setOperaion("+")
    handleClear()
  } else{
    const sum = Number(firstNumber) + Number(currentNumber)
    setCurrentNumber(String(sum))
    setFirstNumber("0")
    setOperaion("")
  }
}

const handleMultNumbers = ():void =>{
  if(firstNumber === "0"){
    setFirstNumber(currentNumber)
    setOperaion("x")
    handleClear()
  } else{
    const sum = Number(firstNumber) * Number(currentNumber)
    setCurrentNumber(String(sum))
    setFirstNumber("0")
    setOperaion("")
  }
}

const handleDivNumbers = ():void =>{
  if(firstNumber === "0"){
    setFirstNumber(currentNumber)
    setOperaion("/")
    handleClear()
  } else{
    const sum = Number(firstNumber) / Number(currentNumber)
    setCurrentNumber(String(sum))
    setFirstNumber("0")
    setOperaion("")
  }
}

const handleRemNumbers = ():void =>{
  if(firstNumber === "0"){
    setFirstNumber(currentNumber)
    setOperaion("-")
    handleClear()
  } else{
    const sum = Number(firstNumber) - Number(currentNumber)
    setCurrentNumber(String(sum))
    setFirstNumber("0")
    setOperaion("")
  }
}

const handleEquals = ():void =>{
  if(firstNumber !== "0" && operation !== "" && currentNumber !== "0"){
   switch(operation){
    case "+":
    handleSumNumbers()
    break;
    case "-":
    handleRemNumbers()
    break;
    case "x":
      handleMultNumbers()
      break;
      case "/":
        handleDivNumbers()
        break;
   }
  }
}

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")}/>
          <Button label="2" onClick={() => handleAddNumber("2")}/>
          <Button label="3" onClick={() => handleAddNumber("3")}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")}/>
          <Button label="5" onClick={() => handleAddNumber("5")}/>
          <Button label="6" onClick={() => handleAddNumber("6")}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")}/>
          <Button label="8" onClick={() => handleAddNumber("8")}/>
          <Button label="9" onClick={() => handleAddNumber("9")}/>
          <Button label=" -" onClick={handleRemNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="C" onClick={() => handleClear()}/>
          <Button label="X" onClick={handleMultNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}
