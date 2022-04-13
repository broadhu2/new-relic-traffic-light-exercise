import React from "react";
import { GREEN, RED, YELLOW } from "../../constants";
import { cx } from "../../utils";
import { TrafficLightBulb } from "../TrafficLightBulb";

import "./traffic-light.scss";

export const TrafficLight = ({ onClick = () => {}, activeColor }) => {
  // indicates whether light is in initial state, which should allow click/keyboard to activate it
  const clickable = typeof activeColor === "undefined";

  return (
    <div
      onClick={onClick}
      {...(clickable
        ? {
            tabIndex: "0",
            onKeyDown(event) {
              if (event.key === "Enter") {
                onClick();
              }
            }
          }
        : {})}
      className={cx("traffic-light", {
        clickable
      })}
    >
      {[RED, YELLOW, GREEN].map((color) => (
        <TrafficLightBulb
          {...{ color, key: color, active: activeColor === color }}
        />
      ))}
    </div>
  );
};
