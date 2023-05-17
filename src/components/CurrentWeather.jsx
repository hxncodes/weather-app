import React from "react";

const CurrentWeather = () => {
  return (
    <div className="weather-card">
      <div className="top">
        <div>
          <p className="font-semibold text-lg tracking-widest">City Name</p>
          <p className="font-normal leading-none text-sm mt-0">
            Current Weather
          </p>
        </div>
        <img src="" alt="weather" className="w-[100px] " />
      </div>
      <div className="bottom">
        <p className="font-semibold text-7xl w-auto tracking-tighter my-2.5">
          18°C
        </p>
        <div className="w-full px-5">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">22° C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Winds</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15 %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
