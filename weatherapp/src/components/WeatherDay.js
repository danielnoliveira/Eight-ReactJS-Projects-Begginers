import React from 'react';
import './WeatherDay.css';

export default function WeatherDay({day,weather,temp}) {
    return(
        <section className="monitor__day">
            <p className="day__name">{day}</p>
            <div className="day__weather">
              {weather()}
            </div>
            <p className="day__temp">
              {temp}
            </p>
        </section>
    );
}
