import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Forecast = ({ data }) => {
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
