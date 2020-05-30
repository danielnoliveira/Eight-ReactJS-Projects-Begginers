import React,{useState} from 'react';
import Header from './components/Header.js';
import Result from './components/Result.js';
import Turn from './components/Turn.js';
import './App.css';
const results = [
  [[0,0],[0,1],[0,2]],
  [[1,0],[1,1],[1,2]],
  [[2,0],[2,1],[2,2]],
  [[0,0],[1,0],[2,0]],
  [[0,1],[1,1],[2,1]],
  [[0,2],[1,2],[2,2]],
  [[0,0],[1,1],[2,2]],
  [[0,2],[1,1],[2,0]],
];
function App() {
  const [board,setBoard] = useState([['','',''],['','',''],['','','']]);
  const [turn, setTurn] = useState(true);
  const [winner,setWinner] = useState('');
  function checkWinner() {
    for(let comb of results){
      var [a,b,c] = comb;
      if(board[a[0]][a[1]]==='' || board[b[0]][b[1]]==='' || board[c[0]][c[1]]===''){
        continue;

      }
      if(board[a[0]][a[1]]===board[b[0]][b[1]] && board[b[0]][b[1]]===board[c[0]][c[1]]){
        console.log('Vencedor');
        setWinner(!winner);
        return;
      }
    }
  }
  function fillSquare(turn,row,col) {
    if(winner)
      return ;
    var nboard = board;
    nboard[row][col] = turn?'X':'O';
    setBoard(nboard);
    setTurn(!turn);
    checkWinner();
  }
  return (
    <div className="App">
      <Header title="tic tac toe"/>
      <Turn turn={turn}/>
      <main className="App__board">
        <button onClick={()=>fillSquare(turn,0,0)} className="board__square">{board[0][0]}</button>
        <button onClick={()=>fillSquare(turn,0,1)} className="board__square">{board[0][1]}</button>
        <button onClick={()=>fillSquare(turn,0,2)} className="board__square">{board[0][2]}</button>
        <button onClick={()=>fillSquare(turn,1,0)} className="board__square">{board[1][0]}</button>
        <button onClick={()=>fillSquare(turn,1,1)} className="board__square">{board[1][1]}</button>
        <button onClick={()=>fillSquare(turn,1,2)} className="board__square">{board[1][2]}</button>
        <button onClick={()=>fillSquare(turn,2,0)} className="board__square">{board[2][0]}</button>
        <button onClick={()=>fillSquare(turn,2,1)} className="board__square">{board[2][1]}</button>
        <button onClick={()=>fillSquare(turn,2,2)} className="board__square">{board[2][2]}</button>
      </main>
      <Result turn={turn} winner={winner}/>
    </div>
  );
}

export default App;
