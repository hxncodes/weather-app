import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Staurday",
  "Sunday",
];

const Forecast = ({ data }) => {
  // Geeting todays day
  const today = new Date().getDay();

  // Arranging a week start from tomorrow
  const forecastDays = weekDays
    .slice(today, weekDays.length)
    .concat(weekDays.slice(0, today));

  console.log(forecastDays);

  return (
    <div>
      <label className="text-2xl font-bold">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="text-base bg-[#f5f5f5] rounded-xl h-10 px-5 py-1 m-1 align-middle flex items-center cursor-pointer">
                  <img
                    className="w-10"
                    src={`icons/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                  />
                  <label className="text-[#212121] flex-1 font-semibold ml-4">
                    {forecastDays[idx]}
                  </label>
                  <label className="flex-1 mr-4 text-right">
                    {item.weather[0].description}
                  </label>
                  <label className="text-[#757575]">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid gap-y-0 gap-x-4 flex-1 grid-cols-2 py-1 px-4">
                <div className="detail-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hpa</label>
                </div>
                <div className="detail-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="detail-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className="detail-item">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="detail-item">
                  <label>Sea level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="detail-item">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
