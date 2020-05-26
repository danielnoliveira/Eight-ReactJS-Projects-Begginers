import React,{useState} from 'react';

import './App.css';

function getConclusionBMI(bmi){
  if(bmi===0){
    return '';
  }
  if(bmi<18.5){
    return 'Underweight';
  }
  if(18.5<=bmi<=24.99){
    return 'Normal weight';
  }
  if(bmi>=30){
    return 'Obesity';
  }
  return 'Overweight';
}
function App() {
  const [height,setHeight] = useState(0);
  const [weight,setWeight] = useState(0);
  const [result,setResult] = useState(0);
  return (
    <div className="App">
      <h1 className="App__title">bmi calculator</h1>
      <form className="App__form">
        <div className="form__row">
          <div className="row__element">
            <p className="element__inputName">
              Height(in m)
            </p>
            <input type="number" className="element__inputField" placeholder={height} step="0.01" min="0" max="3" onChange={e=>{setHeight(e.target.value)}}/>
          </div>
          <div className="row__element">
            <p className="element__inputName">
              Weight(in Kg)
            </p>
            <input type="number" className="element__inputField" placeholder={weight} step="0.01" min="0" max="350" onChange={e=>{setWeight(e.target.value)}}/>
          </div>
        </div>
        <button className="form__button" onClick={e=>{
          e.preventDefault();
          setResult((weight/(height**2)).toFixed(2))}}>calculate</button>
      </form>
      <div className="App__result">
        BMI: {result} ; Conclusion: {getConclusionBMI(result)}
      </div>
    </div>
  );
}

export default App;
