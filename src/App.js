import "./App.css";

import { useSelector, useDispatch } from "react-redux";

const selectCount = (state) => state.counter.count;

function App() {
  const count = useSelector(selectCount);
  console.log("🚀 ~ App ~ count:", count);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch({ type: "count/increment" });
  }
  function handleDecrement() {
    dispatch({ type: "count/decrement" });
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleIncrement}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>-</button>
      </header>
    </div>
  );
}

export default App;
