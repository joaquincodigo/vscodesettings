import { useState, useEffect } from 'react';

const useWeatherData = (lat, lon, apiKey) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setWeatherData({
          temperature: data.main.temp,
          feelsLike: data.main.feels_like,
          weather: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          visibility: data.visibility,
          cityName: data.name,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [lat, lon, apiKey]);

  return { weatherData, loading, error };
};

export default useWeatherData;
