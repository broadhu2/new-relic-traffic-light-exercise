import React from "react";
import { cx } from "../../utils";

import "./container.scss";

function makeSection(type) {
  return ({ className, children }) => (
    <div className={cx(type, className)}>{children}</div>
  );
}

export const Container = makeSection("container");
export const Header = makeSection("header");
export const Body = makeSection("body");
export const Footer = makeSection("footer");
