import React from 'react'


const useCalculadora = () => {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<number | null>(null);
  
    const handleNumberPress = (buttonValue: string) => {
    setFirstNumber(firstNumber + buttonValue);
    };
  
    const handleOperationPress = (buttonValue: string) => {
      setOperation(buttonValue);
      setSecondNumber(firstNumber);
      setFirstNumber("");
    };
  
    const clear = () => {
      setFirstNumber("");
      setSecondNumber("");
      setOperation("");
      setResult(null);
    };
  

  
    const getResult = () => {
      switch (operation) {
        case "+":
          clear();
          setResult(parseInt(secondNumber) + parseInt(firstNumber));
          break;
        case "-":
          clear();
          setResult(parseInt(secondNumber) - parseInt(firstNumber));
          break;
        case "*":
          clear();
          setResult(parseInt(secondNumber) * parseInt(firstNumber));
          break;
        case "/":
          clear();
          setResult(parseInt(secondNumber) / parseInt(firstNumber));
          break;
        default:
          clear();
          setResult(0);
          break;
      }
    };
    return{
        result,
        firstNumber,
        secondNumber,
        operation,
        handleOperationPress,
        getResult,
        handleNumberPress,
        clear
    }
}

export default useCalculadora