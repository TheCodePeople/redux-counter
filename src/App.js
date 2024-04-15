import "./App.css";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
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
