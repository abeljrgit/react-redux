import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addByTen = () => {
    dispatch({ type: "ADDBYTEN", payload: 10 });
  };

  return (
    <section>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment} className="bg-blue-400 mr-4 p-2">
        Increment
      </button>
      <button onClick={decrement} className="bg-blue-400 mr-4 p-2">
        Decrement
      </button>
      <button onClick={addByTen} className="bg-blue-400 mr-4 p-2">
        Add by 10
      </button>
    </section>
  );
}

export default App;
