import React from "react";
import { cx } from "../../utils";

import "./traffic-light-bulb.scss";

export const TrafficLightBulb = ({ color, active }) => {
  return (
    <div
      className={cx("traffic-light-bulb", color, {
        active
      })}
    />
  );
};
