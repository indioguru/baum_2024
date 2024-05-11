import React, { useState } from "react";

const VenuesModal = ({ data }) => {
  const [currentModal, setCurrentModal] = useState(0);
  return (
    <div className="pb-[100px]">
      {data?.map((item, index) => (
        <div key={`modal_${index}`}>
          <p
            onClick={() => setCurrentModal(index)}
            className="bg-white p-2 inline-block sharp cursor-pointer text-[20px] mt-[60px] hover:text-green_two hover:bg-black transition-colors duration-300"
          >
            {item.Asociado}
          </p>

          {currentModal === index && (
            <>
              <p className="mt-[13px] text-[14px] text-white pp-book lg:w-[70%] lg:text-[18px] ">{item?.Texto}</p>
              <div className="button_two text-end mt-[22px] ver_mas_resident_fabric">
                <a className="ver_mas_resident_fabric" href={item?.Link} target="_blank" rel="noopener noreferrer ">
                  VER MÁS
                </a>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default VenuesModal;
