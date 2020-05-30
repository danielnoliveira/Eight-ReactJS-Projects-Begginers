import React from 'react';
import './Turn.css';
export default function Turn({turn}){
    return(
        <div className="App__turn">
            <h2 className="turn__text">
            Turn:{turn?'X':'O'}
            </h2>
      </div>
    );
}