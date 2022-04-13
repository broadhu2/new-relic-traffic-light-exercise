import React from "react";
import { cx } from "../../utils";

import "./button.scss";

export const Button = ({
  className,
  onClick,
  children,
  selected = false,
  ...rest
} = {}) => {
  return (
    <button onClick={onClick} className={cx(className, { selected })} {...rest}>
      {children}
    </button>
  );
};
