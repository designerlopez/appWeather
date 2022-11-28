import React from "react";

const WeatherCard = ({ weather, temperature, isCelsius, changeUnitTemp }) => {
  return (
    <article className="weatherCard">
      <h1>Weather App</h1>
      <h3>{`${weather.name}, ${weather.sys.country}`}</h3>
      <section>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt=""
          />
        </div>
        <ul>
          <li>{weather.weather[0].description}</li>
          <li>Wind speed: {weather.wind.speed} m/s</li>
          <li>Clouds: {weather.clouds.all} %</li>
          <li>Pressure: {weather.main.pressure} hPa</li>
        </ul>
      </section>
      <p>{isCelsius? `${temperature.celsius} °C`: `${temperature.fahrenheit} °F`} </p>
      <button onClick={changeUnitTemp}>Degrees °F/°C</button>
    </article>
  );
};

export default WeatherCard;
