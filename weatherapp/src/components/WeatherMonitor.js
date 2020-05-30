import React from 'react';
import './WeatherMonitor.css';
import { WiDayCloudyGusts,WiDayRain ,WiDaySunnyOvercast,WiSnowWind,WiNightRain,WiTornado,WiCloudy} from "react-icons/wi";
import WeatherDay from './WeatherDay.js';
const DATA = [
    {
      day:"mon",
      temp:"20° C",
      weather:()=>(<WiDayRain/>)
    },
    {
      day:"tue",
      temp:"28° C",
      weather:()=>(<WiDaySunnyOvercast/>)
    },
    {
      day:"wed",
      temp:"-10° C",
      weather:()=>(<WiSnowWind/>)
    },
    {
      day:"thu",
      temp:"18° C",
      weather:()=>(<WiNightRain/>)
    },
    {
      day:"fri",
      temp:"12° C",
      weather:()=>(<WiTornado/>)
    },
    {
      day:"sat",
      temp:"22° C",
      weather:()=>(<WiCloudy/>)
    },
    {
      day:"sun",
      temp:"23° C",
      weather:()=>(<WiDayCloudyGusts/>)
    }
  ];
export default function WeatherMonitor(){
    return(
        <main className="App__monitor">
          {DATA.map(obj=>{
              return (<WeatherDay day={obj.day} temp={obj.temp} weather={obj.weather}/>);
          })}
        </main>
    );
}