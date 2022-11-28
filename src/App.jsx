import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCelsius, setIsCelsius] = useState(true)

  const success = (pos) => {
    const newCoords = {
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
    };
    setCoords(newCoords);
  };

  const changeUnitTemp=()=>{
    setIsCelsius(!isCelsius)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords) {
      const API_KEY = "7e748cdd73f23862d4c2485f95318199";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${API_KEY}`;
      axios.get(URL)
        .then(res=>{
          const tempK=res.data.main.temp
          const tempC=(tempK - 273.15).toFixed(1)
          const tempF=((tempC*(9/5))+32).toFixed(1)
          const newTemperature={
            celsius:tempC,
            fahrenheit:tempF
          }
          setTemperature(newTemperature)
          setWeather(res.data)
        })

        .catch(err=>console.error(err))
    }
  }, [coords])

  console.log(temperature);


  return (
    <div className="App">
      
      
      {
        weather? (<WeatherCard 
                  weather={weather} 
                  temperature={temperature}
                  changeUnitTemp={changeUnitTemp}
                  isCelsius={isCelsius}

                  />
        ): <p>LOADING...</p>
      }

    </div>
  );
}

export default App;
