import React from "react";
import { Body, Container, Header, TrafficLightController } from "./components";
import { useEffect, useState } from "react";
import fetchLight from "./fetchLight";
import { randomColor, requestNextColor } from "./utils";
import { SEQUENTIAL } from "./constants";
import { ReactComponent as NewRelicLogo } from "./new-relic-logo.svg";

import "./styles.scss";

export default function App() {
  const [activeColor, setActiveColor] = useState();
  const [requestedColor, setRequestedColor] = useState();
  const [activeMode, setActiveMode] = useState("sequential");
  const [resetSequence, setResetSequence] = useState(false);

  // request next color using async fetchLight promise
  useEffect(() => {
    (async () => {
      if (requestedColor) {
        const nextColor = await fetchLight(requestedColor);
        setActiveColor(nextColor);
      }
    })();
  }, [requestedColor]);

  return (
    <Container className="traffic-light-container">
      <Header>
        <NewRelicLogo />
        <h1 className="title">Traffic Light Controller</h1>
      </Header>
      <Body>
        <TrafficLightController
          {...{
            activeMode,
            activeColor,
            onSelectMode(selected) {
              setActiveMode(selected);

              if (selected === SEQUENTIAL) {
                setResetSequence(true);
              }
            },
            onClickTrafficLight() {
              if (!activeColor) setRequestedColor(randomColor());
            },
            onClickChangeButton() {
              setRequestedColor(
                requestNextColor({
                  activeMode,
                  activeColor,
                  resetSequence
                })
              );
              setResetSequence(false);
            }
          }}
        />
      </Body>
    </Container>
  );
}
