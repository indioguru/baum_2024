import React, { useState } from "react";

const SvgMenu = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <svg
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47 48"
    >
      <path
        d="M45.1006 23.6667C45.1006 36.1135 35.2307 46.1667 23.1006 46.1667C10.9705 46.1667 1.10059 36.1135 1.10059 23.6667C1.10059 11.22 10.9705 1.16675 23.1006 1.16675C35.2307 1.16675 45.1006 11.22 45.1006 23.6667Z"
        stroke="#F7F6F7"
        strokeWidth="2"
        fill={isHover ? "#f7f6f7" : "none"}
      />

      <path d="M36.502 29.5516L9.69868 29.5516" stroke={isHover ? "#3D3D3B" : "#F7F6F7"} strokeWidth="2" strokeLinecap="round" />
      <path d="M36.502 23.667L9.69868 23.667" stroke={isHover ? "#3D3D3B" : "#F7F6F7"} strokeWidth="2" strokeLinecap="round" />
      <path d="M36.502 17.782L9.69868 17.782" stroke={isHover ? "#3D3D3B" : "#F7F6F7"} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default SvgMenu;
