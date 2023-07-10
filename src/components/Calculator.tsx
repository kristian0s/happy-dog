import { useEffect, useState } from "react";
import inputValue from "../features/calculator/calculator-page";
import addOrSubtract from "../features/calculator/calculator-page";

const Calculator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isClear, setIsClear] = useState<boolean>(false);

  const handleButtonClick = (buttonValue) => {
    setInputValue((prevValue) => prevValue + buttonValue);
  };

  useEffect(() => {
    setInputValue("");
  }, []);

  return (
    <div className="calculator">
      {/* <div className="calculator__field" id="result-field"></div> */}
      <input
        type="text"
        value={inputValue}
        className="calculator__field"
        id="result-field"
      />
      <div className="calculator__btn" onClick={() => handleButtonClick("1")}>
        1
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("2")}>
        2
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("3")}>
        3
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("/")}>
        /
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("4")}>
        4
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("5")}>
        5
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("6")}>
        6
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("*")}>
        *
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("7")}>
        7
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("8")}>
        8
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("9")}>
        9
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("-")}>
        -
      </div>
      <div className="calculator__btn" onClick={() => setIsClear(true)}>
        C
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("0")}>
        0
      </div>
      <div className="calculator__btn" onClick={() => addOrSubtract()}>
        =
      </div>
      <div className="calculator__btn" onClick={() => handleButtonClick("+")}>
        +
      </div>
    </div>
  );
};

export default Calculator;
