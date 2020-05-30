import React from 'react';
import './Header.css';
export default function Headers({title}){
    return(
        <header className="App__header">
            <h1 className="header__title">{title}</h1>
        </header>
    );
}