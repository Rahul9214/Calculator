import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleEvaluate = () => {
    try {
      if (input === "") {
        setOutput("Error");
      } else {
        const result = eval(input);
        if (isNaN(result)) {
          setOutput("NaN");
        } else {
          setOutput(result);
        }
      }
    } catch (error) {
      setOutput("Error");
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <p>{output}</p>

      <div className="calculator">
        <div className="row">
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("+")}>+</button>
        </div>

        <div className="row">
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")}>-</button>
        </div>

        <div className="row">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("*")}>*</button>
        </div>

        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={handleEvaluate}>=</button>
          <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
    </div>
  </div>
  );
}
