import { useState } from "react";

const CalculatorPage = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const addOrSubtract = (num1: number, num2: number, operator) => {
    if (operator == "+") {
      return num1 + num2;
    } else if (operator == "-") {
      return num1 - num2;
    }
  };

  //   const multiplyOrDivide = (num1: number, num2: number, operator) => {
  //     if (operator == "*") {
  //       return num1 * num2;
  //     } else if (operator == "/") {
  //       return num1 / num2;
  //     }
  //   };

  const clearField = () => {
    setInputValue("");
  };
  return;
};

export default CalculatorPage;
