import React from "react";

const SvgArrow = ({ style }) => {
  return (
    <svg className={`${style}`} xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
      <path d="M7.5449 25.1807L22.751 12.8089L9.19376 1.77868" stroke="#F7F6F7" strokeWidth="2" strokeLinecap="square" />
      <path d="M1.50681 25.1807L16.7129 12.8089L3.15568 1.77868" stroke="#F7F6F7" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
};

export default SvgArrow;
