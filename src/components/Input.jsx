import { useState } from "react";
import clsx from "clsx";

export default function Input(props) {
  const { placeholder, type = "text", className, required, ...rest } = props;
  const classes = clsx("input", className);
  const requiredVar = required ? true : false;
  return (
    <>
      <label className="label">
        {placeholder}
        {required && <span className="input-required">*</span>}
        <div>
          <input
            required={requiredVar}
            className={classes}
            type={type}
            placeholder={placeholder}
            {...rest}
          />
        </div>
      </label>
    </>
  );
}
