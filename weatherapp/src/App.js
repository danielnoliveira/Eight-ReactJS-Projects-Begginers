import React from 'react';
import { WiDayCloudyGusts,WiDayRain ,WiDaySunnyOvercast,WiSnowWind,WiNightRain,WiTornado,WiCloudy} from "react-icons/wi";
import './App.css';

function App(){

    return (
      <div className="App">
        <header className="App__header">
    <h1 className="header__title">weather app</h1>
        </header>
        <main className="App__monitor">
          <section className="monitor__day">
            <p className="day__name">mon</p>
            <div className="day__weather">
              <WiDayRain />
            </div>
            <p className="day__temp">
              20° C
            </p>
          </section>
          <section className="monitor__day">
            <p className="day__name">tue</p>
            <div className="day__weather">
              <WiDaySunnyOvercast />
            </div>
            <p className="day__temp">
              28° C
            </p>
          </section>
          <section className="monitor__day">
            <p className="day__name">wed</p>
            <div className="day__weather">
              <WiSnowWind />
            </div>
            <p className="day__temp">
              -10° C
            </p>
          </section>
          <section className="monitor__day">
            <p className="day__name">thu</p>
            <div className="day__weather">
              <WiNightRain />
            </div>
            <p className="day__temp">
              18° C
            </p>
          </section>
          <section className="monitor__day">
            <p className="day__name">fri</p>
            <div className="day__weather">
              <WiTornado />
            </div>
            <p className="day__temp">
              12° C
            </p>
          </section>
          <section className="monitor__day">
          <p className="day__name">sat</p>
          <div className="day__weather">
              <WiCloudy />
            </div>
            <p className="day__temp">
              22° C
            </p>
          </section>
          <section className="monitor__day">
            <p className="day__name">sun</p>
            <div className="day__weather">
              <WiDayCloudyGusts />
            </div>
            <p className="day__temp">
              23° C
            </p>
          </section>
        </main>
      </div>
    );
}

export default App;
