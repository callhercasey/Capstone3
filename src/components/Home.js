import React, { useState } from "react";
import WeatherData from "./WeatherData";

function Home() {
  const apiKey = "";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          console.log(data);
        });
    }
  };
  return (
    <div className="app">
      <div className="container">
        <input
          className="input"
          placeholder="Enter City..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={getWeather}
        />
      </div>
     

      {weatherData && <WeatherData data={weatherData}></WeatherData>}
    </div>
  );
}

export default Home;

