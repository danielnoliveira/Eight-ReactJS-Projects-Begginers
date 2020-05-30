import React from 'react';
import './App.css';
import Header from './components/Header.js';
import WeatherMonitor from './components/WeatherMonitor.js';
function App(){

    return (
      <div className="App">
        <Header title="weather app" />
        <WeatherMonitor />
      </div>
    );
}

export default App;
