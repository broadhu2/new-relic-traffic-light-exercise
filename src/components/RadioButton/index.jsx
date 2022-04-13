import React from "react";
import { cx } from "../../utils";

import "./radio-button.scss";

export const RadioButton = ({
  selected,
  id,
  name,
  label,
  onChange,
  ...rest
}) => {
  return (
    <div className="radio-wrapper">
      <input
        type="radio"
        name={name}
        id={id}
        value={id}
        onChange={onChange}
        checked={selected}
        {...rest}
      />
      <label className={cx({ selected })} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
