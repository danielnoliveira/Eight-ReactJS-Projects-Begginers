import React,{useState} from 'react';
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
      <header className="App__header">
        <h1 className="header__title">tic tac toe</h1>
      </header>
      <div className="App__turn">
        <h2 className="turn__text">
          Turn:{turn?'X':'O'}
        </h2>
      </div>
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
      <div className="App__result">
        <h2 className="result__text">
          {winner?'Ganhador: '+(turn?'O':'X'):''}
        </h2>
      </div>
    </div>
  );
}

export default App;
