import React, { useState } from "react";
import SvgMore from "../../svgs/SvgMore";
import SvgRest from "../../svgs/SvgRest";

const Modal = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(null);
  return (
    <div className=" pb-[126px]">
      {data.map((item, idx) => {
        const isSelected = modalOpen === idx;
        return (
          <div className="pp-book cursor-pointer" key={`cashless_${idx}`}>
            <div
              onClick={() => {
                modalOpen === idx ? setModalOpen(null) : setModalOpen(idx);
              }}
              className="flex items-center"
            >
              {isSelected ? <SvgRest /> : <SvgMore />}

              <p className={`text-[14px] duration-300 transition-colors pp-bold lg:text-[20px]  ${isSelected ? "text-green_two" : "text-white"}`}>{item.Titulo}</p>
            </div>
            <div className={`border-t duration-300 transition-all  ${isSelected ? "w-[120%] " : "w-[100%] lg:w-[80%]"}`}></div>

            <p
              className={`text-[12px] text-white duration-1000 transition-all my-[10px] lg:my-[20px] pl-[15px] lg:text-[18px] lg:w-[80%] ${
                isSelected ? "max-h-[2000px] opacity-1   my-[20px] lg:my-[40px]" : "max-h-[0px] opacity-0 pointer-events-none"
              }`}
            >
              {item.Texto}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
