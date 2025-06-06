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
    <div className="bg-pink-300 flex flex-col w-100">
      <div>{weatherData.cityName}</div>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
        alt="Weather Icon"
      />
      <div className="w-full text-center capitalize">{weatherData.weather}</div>
      <div>Temperature: {weatherData.temperature} °C</div>
      <div>Feels like: {weatherData.feelsLike} °C</div>
      <div className="flex flex-row">
        <div>Humidity: {weatherData.humidity}%</div>
        <div>Wind Speed: {weatherData.windSpeed} m/s</div>
        <div>Visibility: {weatherData.visibility / 1000} km</div>
      </div>
    </div>
  );
};

export default WeatherWidget;
