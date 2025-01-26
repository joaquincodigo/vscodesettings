import { useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';

const useWeatherData = (latitude, longitude) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = {
      latitude,
      longitude,
      current: [
        "temperature_2m", 
        "apparent_temperature", 
        "is_day", 
        "precipitation", 
        "rain", 
        "showers", 
        "snowfall", 
        "weather_code"
      ],
      forecast_days: 1,
    };

    const url = "https://api.open-meteo.com/v1/forecast";

    const fetchData = async () => {
      try {
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];

        const utcOffsetSeconds = response.utcOffsetSeconds();
        const current = response.current()!;

        const weatherData = {
          current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0)!.value(),
            apparentTemperature: current.variables(1)!.value(),
            isDay: current.variables(2)!.value(),
            precipitation: current.variables(3)!.value(),
            rain: current.variables(4)!.value(),
            showers: current.variables(5)!.value(),
            snowfall: current.variables(6)!.value(),
            weatherCode: current.variables(7)!.value(),
          },
        };

        setWeatherData(weatherData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return { weatherData, loading, error };
};

export default useWeatherData;
