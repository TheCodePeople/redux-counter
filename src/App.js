import "./App.css";

function App() {
  function handleIncrement() {
    // TODO: Dispatch an action to update the state. Use the useDispatch from react-redux
  }
  function handleDecrement() {
    // TODO: Dispatch an action to update the state. Use the useDispatch from react-redux
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleIncrement}>+</button>
        {/* Replace the following with an actual value */}
        <p>0</p>
        <button onClick={handleDecrement}>-</button>
      </header>
    </div>
  );
}

export default App;
