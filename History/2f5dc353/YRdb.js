import { useState, useEffect } from 'react';

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const params = {
        latitude: -34.9033,
        longitude: -56.1882,
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
        forecast_days: 1
      };
      const url = "https://api.open-meteo.com/v1/forecast";

      try {
        const response = await fetch(url, {
          method: 'GET', // Changed to GET, adjust if API requires POST
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Check if data is as expected
        if (data && data.current) {
          const utcOffsetSeconds = data.utcOffsetSeconds || 0; // Default to 0 if undefined
          const current = data.current;

          setWeatherData({
            current: {
              time: new Date((Number(current.time) + utcOffsetSeconds) * 1000),
              temperature2m: current.variables?.[0]?.value || 'N/A',
              apparentTemperature: current.variables?.[1]?.value || 'N/A',
              isDay: current.variables?.[2]?.value || 'N/A',
              precipitation: current.variables?.[3]?.value || 'N/A',
              rain: current.variables?.[4]?.value || 'N/A',
              showers: current.variables?.[5]?.value || 'N/A',
              snowfall: current.variables?.[6]?.value || 'N/A',
              weatherCode: current.variables?.[7]?.value || 'N/A',
            },
          });
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return { weatherData, loading, error };
};

export default useWeatherData;
