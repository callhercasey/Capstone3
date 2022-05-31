import React, {useEffect, useState} from 'react';
function WeatherData({data}) {
    return (<div>{typeof data.main == "undefined" ? (
            <div>
              <p>Welcome to the weather app! Enter in a city to get the weather.</p>
            </div>
          ) : (
            <div className="weather-data">
              <p className="city">{data.name}</p>
              <p className="temp">{Math.round(data.main.temp)}°F</p>
              <p className="weather">{data.weather[0].main}</p>
            </div>
          )}
          {data.cod == "404" ? <p>City not found.</p> : <></>}</div>);
      }
      export default WeatherData;

