import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT } from "./reducers/counterReducer";
import { useState } from "react";

function App() {
  const [inputNumber, setInputNum] = useState(0);
  console.log("🚀 ~ App ~ inputNumber:", inputNumber);

  const getCurrentValue = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // const incrementAction = { type: "count/increment" };
    // dispatch(incrementAction);

    dispatch(INCREMENT);
  };

  const handleDecrement = () => {
    // const incrementAction = { type: "count/increment" };
    // dispatch(incrementAction);

    dispatch(DECREMENT);
  };

  const handleDouble = (e) => {
    e.preventDefault();
    dispatch({ type: "count/double", payload: inputNumber });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleIncrement}>+</button>
        <p>{getCurrentValue}</p>
        <button onClick={handleDecrement}>-</button>
      </header>

      <form>
        <label>Add Sth</label>
        <input
          type="number"
          placeholder="Add sth"
          name="inputNumber"
          value={inputNumber}
          onChange={(e) => setInputNum(e.target.value)}
        />
        <button type="submit" onClick={handleDouble}>
          Double
        </button>
      </form>
    </div>
  );
}

export default App;
