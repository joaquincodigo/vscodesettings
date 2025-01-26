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
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        });
        const data = await response.json();
        // Assume the first response is what you need
        const responseData = data[0];

        const utcOffsetSeconds = responseData.utcOffsetSeconds;
        const timezone = responseData.timezone;
        const timezoneAbbreviation = responseData.timezoneAbbreviation;
        const latitude = responseData.latitude;
        const longitude = responseData.longitude;

        const current = responseData.current;

        setWeatherData({
          current: {
            time: new Date((Number(current.time) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables[0].value,
            apparentTemperature: current.variables[1].value,
            isDay: current.variables[2].value,
            precipitation: current.variables[3].value,
            rain: current.variables[4].value,
            showers: current.variables[5].value,
            snowfall: current.variables[6].value,
            weatherCode: current.variables[7].value,
          },
        });
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
