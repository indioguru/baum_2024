import React, { useEffect, useState } from "react";
import ModalArtist from "../home/utils/ModalArtist";

const ArtistInfo = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexArtist, setIndexArtist] = useState(-1);

  const [anim, setAnim] = useState("animate__fadeInRight");

  const openModal = (index) => {
    setIsModalOpen(true);
    setAnim("animate__slideInRight");
    setIndexArtist(index);
  };

  const closeModal = () => {
    setAnim("animate__slideOutRight");
    setTimeout(() => {
      setIndexArtist(-1);
      setIsModalOpen(false);
    }, 500);
  };

  const nextArtist = () => {
    const newIndex = Math.min(indexArtist + 1, data.length - 1);
    setAnim("animate__slideInRight");
    setIndexArtist(newIndex);
  };

  const prevArtist = () => {
    const newIndex = Math.max(indexArtist - 1, 0);
    setAnim("animate__slideInRight");
    setIndexArtist(newIndex);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div>
      <div className="mt-[36px] lg:w-[70%] lg:mt-[100px]">
        {data.map((item, key) => (
          <p
            onClick={() => openModal(key)}
            key={`item_${key}`}
            className="block hover:bg-black hover:text-green_two cursor-pointer transition-colors duration-300 paragraph "
          >
            {item?.Nombre}
          </p>
        ))}
      </div>
      <div className="overflow-auto">
        {isModalOpen && <ModalArtist anim={anim} artista={data[indexArtist]} onClose={closeModal} onPrev={prevArtist} onNext={nextArtist} />}
      </div>
    </div>
  );
};

export default ArtistInfo;
