import React,{useState} from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);

  const plus = ()=>{
    setCounter(counter+1);
  }
  const minus = ()=>{
    setCounter(counter-1);
  }
  return (
    <div className="App">
      <h1 className="App__title">
        counter
      </h1>
      <div className="App__counter">
        <div className="counter__display">
          <p className="display__value">
            {counter}
          </p>
        </div>
        <div className="counter__buttons">
          <button onClick={minus} className="buttons__minus">
            -
          </button>
          <button onClick={plus} className="buttons__plus">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
