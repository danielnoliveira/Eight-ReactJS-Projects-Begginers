import React,{useState} from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false)
  const validateEmail = (e)=>{
    setEmail(e.target.value);
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setValid(regex.test(email));
  };
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">form validation</h1>
      </header>
      <div className="App__board">
        <p className="App__emailTitle">Email Adress</p> 
        <input value={email} type="email" className="App__email" onChange={e=>validateEmail(e)}/> 
        <p className="App__emailFeedbackValidation">
          {email!='' && !valid?'please enter a valid email adress':""}
        </p>
      </div>
    </div>
  );
}

export default App;
