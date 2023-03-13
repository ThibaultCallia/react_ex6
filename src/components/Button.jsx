// import { useState } from "react";
import clsx from "clsx";

export default function Button({ children, outline, className, ...rest }) {
  const classes = clsx(
    "btn",
    `btn-${outline ? "outline" : "default"}`,
    className
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
