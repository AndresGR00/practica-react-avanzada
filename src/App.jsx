import React from "react";
import { useDate } from "./hooks/useDate";
import Timer from "./components/Timer";
import Calculator from "./components/Calculator";

function App() {
  const date = useDate();

  return (
    <>
      <Timer date={date} />
      <CalculatorMemoized  />
    </>
  );
}


const CalculatorMemoized = React.memo(Calculator);

export default App;
