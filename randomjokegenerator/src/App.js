import React,{useState,useEffect} from 'react';
import './App.css';
const api = 'https://official-joke-api.appspot.com/jokes/random';

function App() {
  const [joke,setJoke] = useState({setup:'',punchline:''});
  const [loading, setLoading] = useState(false);
  const getJoke =async () =>{
    if(loading)
      return;
    setLoading(true);
    const response = await (await fetch(api)).json();
    setJoke({
      setup:response.setup,
      punchline:response.punchline
    });
    setLoading(false);
  }
  useEffect(()=>{
   getJoke();
  },[]);
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">random joke generator</h1>
      </header>
      <main className="App__board">
        <div className="board__joke">
          Q:{joke.setup}<br/>
          A:{joke.punchline}
        </div>
        <button className="board__button" onClick={getJoke}>
          Generate
        </button>
      </main>
    </div>
  );
}

export default App;
