import useScreenResolution from "../../../hooks/useScreenResolution";
import SvgArrow from "../../../svgs/SvgArrow";
import SvgClose from "../../../svgs/SvgClose";

const ModalArtist = ({ anim, artista, onClose, onPrev, onNext }) => {
  if (!artista) return null;

  console.log(artista);

  const { width } = useScreenResolution();

  return (
    <div className={`bg-white w-full fixed z-30 top-0 left-0 scroll animate__animated  ${anim}`}>
      <div className="relative min-h-[100%]">
        <div onClick={onClose} className="w-[50px] lg:w-[70px] absolute right-[10px] top-[10px] z-10">
          <SvgClose />
        </div>

        <div className="lg:flex">
          {width < 1024 ? (
            <img className="w-full object-cover" loading="lazy" src={artista?.Imagen.url} alt="imagen artista" />
          ) : (
            <img className="bject-cover h-[100vh] max-w-[600px]" src={artista?.Imagen_desktop.url} alt="imagen artista" />
          )}

          <div className="relative">
            <div className="w-[80%] m-auto">
              <h3 className="mt-[35px] text-[36px] leading-10 sharp lg:text-[70px] text-black w-[80%] lg:leading-[70px]">{artista.Nombre}</h3>
              <p className="text-[36px] leading-10 sharp my-1 lg:text-[54px] lg:mt-6 text-black">{formatarFecha(artista?.Fecha)}</p>
              <p className="sharp text-[14px] leading-4 lg:text-[20px] text-black lg:mt-4">{ExtractTime(artista?.Hora)}</p>
              <p className="sharp text-[14px] leading-4 lg:text-[20px] lg:mt-2 text-black">{artista?.Stage}</p>

              <div className="flex items-center gap-[20px] mt-[50px]">
                <a
                  href={artista?.Soundcloud}
                  className={`text-[14px] text-white rounded-[16px] px-4 py-1 cursor-pointer bg-red lg:text-[28px] lg:rounded-[40px] lg:px-8 sharp hover:bg-white hover:text-red  border-red transition-colors duration-500 artist_soundcloud soundcloud_{${transformString(
                    artista.Nombre
                  )}}`}
                >
                  SOUNDCLOUD
                </a>
                <a
                  href={artista?.Instagram}
                  className={`text-[14px] text-red px-4 py-1 rounded-[16px] cursor-pointer border-red lg:text-[28px] lg:rounded-[40px] lg:px-8  sharp hover:text-white hover:bg-red transition-colors duration-500 artist_instagram instagram_{${transformString(
                    artista.Nombre
                  )}}`}
                >
                  INSTAGRAM
                </a>
              </div>

              <p className="text-[14px] pp-light mt-[16px] pb-[100px] lg:text-[18px] text-black">{artista?.Descripcion} </p>
            </div>

            <div className=" absolute  bottom-0 bg-black w-[100%] ">
              <div className="container_all flex justify-between py-3 lg:py-10">
                <div onClick={onPrev}>
                  <SvgArrow style={"rotate-[180deg]"} />
                </div>

                <div onClick={onNext}>
                  <SvgArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalArtist;

function formatarFecha(fecha) {
  const partes = fecha.split("-");
  const mes = partes[1];
  const dia = partes[2];
  return `${mes}.${dia}`;
}

function ExtractTime(horaConFormato) {
  const partes = horaConFormato.split(":");
  const hora = partes[0];
  const minutos = partes[1];
  return `${hora}:${minutos}`;
}

function transformString(inputString) {
  return inputString.toLowerCase().replace(/ /g, "_");
}
