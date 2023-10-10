import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './redux/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("");

  return (
    <div className="App">
      <h2>count : {count}</h2>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount} />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(parseInt(incrementAmount)))}>add</button>
    </div>
  );
}

export default App;
