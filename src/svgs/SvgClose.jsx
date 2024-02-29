import React, { useState } from "react";

const SvgClose = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStylesCircle = isHovered ? { fill: "#DCDD26" } : {};
  const hoverStylesPath = isHovered ? { stroke: "#3D3D3B" } : {};

  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <circle className="svg_close" cx="26.0415" cy="25.9995" r="25.2544" fill="#3D3D3B" style={hoverStylesCircle}></circle>
      <path
        className="svg_close_x"
        d="M17.3252 17.2831L34.7586 34.7163"
        stroke="#DCDD26"
        strokeWidth="3"
        strokeLinecap="square"
        style={hoverStylesPath}
      ></path>
      <path
        className="svg_close_x"
        d="M34.7588 17.2832L17.3256 34.7166"
        stroke="#DCDD26"
        strokeWidth="3"
        strokeLinecap="square"
        style={hoverStylesPath}
      ></path>
    </svg>
  );
};

export default SvgClose;
