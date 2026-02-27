import { useState } from "react";
import "./App.css";

const App = () => {
  const [userNumber, setUserNumber] = useState("");
  const [result, setResult] = useState("");
  const NumberData = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
    "C",
  ];

  const handlebtn = (e) => {
    const value = e.target.innerText;
    console.log(value);
    if (value === "=") {
      try {
        setResult(eval(userNumber));
      } catch (err) {
        setResult("Invalid Expression", err);
      }
    } else if (value === "C") {
      setUserNumber("");
      setResult("");
    } else {
      setUserNumber((prev) => prev + value);
    }
  };
  return (
    <div className="Calname">
      <h2>Calculator App</h2>
      <div>
        <input
          type="text"
          placeholder="Enter the Number"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
          required
        />
        <div>
          <p>{result}</p>
          {NumberData.map((val, index) => {
            return (
              <button key={index} onClick={handlebtn}>
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
