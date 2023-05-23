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
      <label>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div>
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                  />
                  <label>{forecastDays[idx]}</label>
                  <label>{item.weather[0].description}</label>
                  <label>
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
