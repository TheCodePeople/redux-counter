import "./App.css";
import store from "./store";

function App() {
  // const { count } = store.getState();

  function handleIncrement() {
    store.dispatch({ type: "count/increment" });
  }
  function handleDecrement() {
    store.dispatch({ type: "count/decrement" });
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleIncrement}>+</button>
        {/* <p>{count}</p> */}
        <button onClick={handleDecrement}>-</button>
      </header>
    </div>
  );
}

export default App;
