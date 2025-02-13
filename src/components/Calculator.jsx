import { useState } from "react";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  function handleClick(value) {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(expression)); // Using eval to calculate the result
      } catch {
        setResult("Error");
      }
    } else {
      setExpression(expression + value);
    }
  }

  return (
    <div className="calculator">
      <h2>Basic Calculator</h2>
      <div className="output">
        <span className="result">{result || expression || ""}</span>
      </div>
      <div className="buttons">
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "=", "/"].map(
          (btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className={btn === "C" ? "bg-red" : btn === "=" ? "bg-green" : ""}
            >
              {btn}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Calculator;
