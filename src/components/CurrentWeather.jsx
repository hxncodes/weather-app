import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather-card">
      <div className="top">
        <div>
          <p className="font-semibold text-lg tracking-widest">{data.city}</p>
          <p className="font-normal leading-none text-sm mt-0">
            {data.weather[0].description}
          </p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
          className="w-[100px]"
        />
      </div>
      <div className="bottom">
        <p className="font-semibold text-6xl w-auto tracking-tighter my-2.5">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="w-full pl-4">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Winds</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
