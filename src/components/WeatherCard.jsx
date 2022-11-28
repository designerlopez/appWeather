import React from "react";

const WeatherCard = ({ weather, temperature, isCelsius, changeUnitTemp }) => {
  return (
    <article className="weatherCard">
      
      <h3>{`${weather.name}, ${weather.sys.country}`}</h3>
      <div className="weatherCard_temperature">
      <p>{isCelsius? `${temperature.celsius} °C`: `${temperature.fahrenheit} °F`} </p>
      <button className="btn_ChangeUnity"onClick={changeUnitTemp}>Change °F/°C</button>
      </div>
      <section>
        <div className="weatherCard_img">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt=""
          />
        </div>
        
  
        <ul className="weatherCard_details">
          <li>{weather.weather[0].description}</li>
          <li>Wind speed: {weather.wind.speed} m/s</li>
          <li>Clouds: {weather.clouds.all} %</li>
          <li>Pressure: {weather.main.pressure} hPa</li>
        </ul>
      </section>
      
    </article>
  );
};

export default WeatherCard;
