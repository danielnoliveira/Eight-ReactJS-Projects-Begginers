import React,{useEffect,useState} from 'react';
import './App.css';

// const api_key = "c62c2cfc553ebdc297732eb02f7f9d37";

function App() {
  const [geolocationUser, setLocationUser] = useState({latitude:'',longitude:''});
  const getMyLocation = ()=>{
    const location = window.navigator && window.navigator.geolocation;
    var {latitude,longitude} = geolocationUser;
    if (location) {
      location.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      }, (error) => {
        setLocationUser({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }
    setLocationUser({latitude,longitude},newState=>console.log(newState));
    console.log(geolocationUser);
  }
  useEffect(getMyLocation,[]);
  return (
    <div className="App">
      <header className="App__header">
        <h1 className="header__title">weather app</h1>
      </header>
      <main className="App__monitor">
        <section className="monitor__day">
          <p className="day__name">mon</p>
        </section>
        <section className="monitor__day">
         <p className="day__name">tue</p>
        </section>
        <section className="monitor__day">
          <p className="day__name">wed</p>
        </section>
        <section className="monitor__day">
          <p className="day__name">thu</p>
        </section>
        <section className="monitor__day">
          <p className="day__name">fri</p>
        </section>
        <section className="monitor__day">
         <p className="day__name">sat</p>
        </section>
        <section className="monitor__day">
          <p className="day__name">sun</p>
        </section>
      </main>
    </div>
  );
}

export default App;
