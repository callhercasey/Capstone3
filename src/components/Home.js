import React, { useState } from "react";
import WeatherData from "./WeatherData";
import  Navbar  from "./Navbar";

function Home() {
  const apiKey = "5d7a77e26e85e18e76823fa42cd9d5e9";
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
      <Navbar/>
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

