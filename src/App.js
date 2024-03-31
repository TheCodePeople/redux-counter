import "./App.css";
import { initialState, dispatch } from "./store";

function App() {
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
        <p>{initialState.count}</p>
        <button onClick={handleDecrement}>-</button>
      </header>
    </div>
  );
}

export default App;
