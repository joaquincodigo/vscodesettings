"use client";

import React from "react";
import useWeatherData from "../hooks/useWeatherData"; // Adjust the path as needed

const WeatherWidget = () => {
  const lat = 44.34; // Replace with desired latitude
  const lon = 10.99; // Replace with desired longitude
  const apiKey = "2b87b144063f738d6e1e2613bd72cf8f"; // Replace with your OpenWeatherMap API key

  const { weatherData, loading, error } = useWeatherData(lat, lon, apiKey);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-pink-300 flex flex-col w-100 items-center">
      <div className="w-full text-center">{weatherData.cityName}</div>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
        alt="Weather Icon"
        className="w-[30%] aspect-w-1 aspect-h-1 object-cover"
      />
      <div className="w-full text-center capitalize bg-green-500">
        {weatherData.weather}
      </div>
      <div className="w-full text-center text-4xl bg-yellow-400">
        {weatherData.temperature} °C
      </div>
      
      <div className="w-full text-center text-2xl bg-slate-400">
        Feels like {weatherData.feelsLike} °C
      </div>


      <div className="flex justify-between items-center">
  <div className="text-center">
    <div>Humidity</div>
    <div>{weatherData.humidity}%</div>
  </div>

  <div className="text-center">
    <div>Wind Speed</div>
    <div>{weatherData.windSpeed} m/s</div>
  </div>

  <div className="text-center">
    <div>Visibility</div>
    <div>{weatherData.visibility / 1000} km</div>
  </div>
</div>




    </div>
  );
};

export default WeatherWidget;
