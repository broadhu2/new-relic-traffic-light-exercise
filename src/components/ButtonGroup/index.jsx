import React from "react";
import { Children, cloneElement, isValidElement } from "react";

import "./button-group.scss";

export const ButtonGroup = ({
  label,
  name,
  selected,
  onSelectButton,
  children
}) => {
  return (
    <div className="button-group">
      <fieldset>
        <legend>{label}</legend>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            const { id } = child.props;
            return cloneElement(child, {
              name,
              selected: id === selected,
              onChange: () => {
                onSelectButton(id);
              }
            });
          }
          return child;
        })}
      </fieldset>
    </div>
  );
};
