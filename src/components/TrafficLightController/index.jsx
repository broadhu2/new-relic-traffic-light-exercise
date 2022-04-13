import React from "react";
import { RANDOM, SEQUENTIAL } from "../../constants";
import { sentenceCase } from "../../utils";
import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import { RadioButton } from "../RadioButton";
import { TrafficLight } from "../TrafficLight";

import "./traffic-light-controller.scss";

export const TrafficLightController = ({
  activeColor,
  onSelectMode,
  onClickTrafficLight,
  onClickChangeButton,
  activeMode = SEQUENTIAL,
  modes = [SEQUENTIAL, RANDOM],
  selectModeLabel = "Select Mode",
  changeButtonLabel = "Change!"
} = {}) => {
  return (
    <div className="traffic-light-controller">
      <ButtonGroup
        label={selectModeLabel}
        name="mode"
        selected={activeMode}
        onSelectButton={onSelectMode}
      >
        {modes.map((m) => (
          <RadioButton key={m} id={m} label={sentenceCase(m)} />
        ))}
      </ButtonGroup>
      <div className="light-switcher">
        <TrafficLight
          {...{
            activeColor,
            onClick: onClickTrafficLight
          }}
        />
        <Button className="change-button" onClick={onClickChangeButton}>
          {changeButtonLabel}
        </Button>
      </div>
    </div>
  );
};
