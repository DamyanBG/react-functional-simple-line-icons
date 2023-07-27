import React from "react";
import "simple-line-icons/css/simple-line-icons.css";

const fontSize = (size) => {
  if (size.toLowerCase() === "large") {
    return "22pt";
  } else if (size.toLowerCase() === "small") {
    return "8pt";
  }
  return "18px";
};

const SimpleLineIcon = ({ name, color, size, style, ...rest }) => (
  <div
    className={`icon-${name}`}
    style={{
      color,
      fontSize: fontSize(size),
      ...style,
    }}
    {...rest}
  />
);

export default SimpleLineIcon;
