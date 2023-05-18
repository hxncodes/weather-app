import React, { useState } from "react";
import Search from "./components/Search";
import Layout from "./components/layout";
import CurrentWeather from "./components/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

const App = () => {
  // Hooks to store weather and forecast data
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // Fetching data from weather API
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="w-full bg-blue-300 py-4">
      <div className="container mx-auto">
        <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather />
        <Layout />
      </div>
    </div>
  );
};

export default App;
