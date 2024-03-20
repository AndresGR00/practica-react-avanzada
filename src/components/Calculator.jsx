import { useState, useEffect } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOperation, setSelectedOperation] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [lastResult, setLastResult] = useState("");
  const [historicalResults, setHistoricalResults] = useState([]);

  useEffect(() => {
    if (selectedOperation === "=") {
      setSecondValue(inputValue);
    }
  }, [selectedOperation, inputValue]);

  useEffect(() => {
    if (firstValue && selectedOperation && secondValue) {
      let result;
      switch (selectedOperation) {
        case "+":
          result = parseFloat(firstValue) + parseFloat(secondValue);
          break;
        case "-":
          result = parseFloat(firstValue) - parseFloat(secondValue);
          break;
        case "x":
          result = parseFloat(firstValue) * parseFloat(secondValue);
          break;
        case "/":
          result = parseFloat(firstValue) / parseFloat(secondValue);
          break;
        case "%":
          result = parseFloat(firstValue) % parseFloat(secondValue);
          break;
        default:
          return;
      }
      setLastResult(result.toString());
      setFirstValue("");
      setSecondValue("");
      setSelectedOperation("");
      setHistoricalResults(prevResults => [...prevResults, result].sort((a, b) => a - b ));
    }
  }, [firstValue, secondValue, selectedOperation]);

  const handleClick = (operation) => {
    if (operation === "=") {
      if (firstValue && selectedOperation && secondValue) {
        return;
      }
      setSecondValue(inputValue);
      setInputValue("");
    } else {
      setSelectedOperation(operation);
      setInputValue("");
      setFirstValue(inputValue);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-[300px] gap-6 my-20 mx-auto">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        name="calc"
        id="calc"
        className="border-2 rounded-md border-black px-2 text-right"
      />
      <div className="flex gap-4">
        {["+", "-", "x", "/", "%", "="].map((operation, index) => (
          <button className="py-1 px-2 min-w-[33px] border-2 rounded-md" key={index} onClick={() => handleClick(operation)}>
            {operation}
          </button>
        ))}
      </div>
      <h3 className="font-semibold">Last Result: {lastResult} </h3>
      <ul className="flex flex-col justify-center items-center font-semibold">Historical Results:
        {historicalResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calculator;
