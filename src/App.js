import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [desiredAmount, setDesiredAmount] = useState(0);

  const getCurrentValue = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset(0));
  };

  const handleIncrementByAmount = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(desiredAmount));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleIncrement}>+</button>
        <p>{getCurrentValue}</p>
        <button onClick={handleDecrement}>-</button>

        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>Enter the desired amount to increase by:</label>
          <input
            type="number"
            placeholder="Add sth"
            name="desiredAmount"
            value={desiredAmount}
            onChange={(e) => setDesiredAmount(e.target.value)}
          />
          <button type="submit" onClick={handleIncrementByAmount}>
            Increase
          </button>
        </form>
        <button onClick={handleReset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
