import { useState } from "react";
import Add from "./Add";
import Subtract from "./Subtract";
import Multiply from "./Multiply";
import Divide from "./Divide";
import Clear from "./Clear";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Arithmetic Calculator</h2>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div style={{ margin: "20px" }}>
        <Add num1={num1} num2={num2} setResult={setResult} />
        <Subtract num1={num1} num2={num2} setResult={setResult} />
        <Multiply num1={num1} num2={num2} setResult={setResult} />
        <Divide num1={num1} num2={num2} setResult={setResult} />
      </div>

      <Clear setNum1={setNum1} setNum2={setNum2} setResult={setResult} />

      <h3>Result: {result}</h3>
    </div>
  );
}

export default App;