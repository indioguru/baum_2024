import useScreenResolution from "../../../hooks/useScreenResolution";

const FooterImageResponsive = ({ data }) => {
  const { width } = useScreenResolution();

  return (
    <div className="flex justify-center items-center">
      {width < 1024 ? <img className="w-full object-contain" src={data?.Logos_mobile.url} alt="logo" /> : <img src={data?.Logos_destock.url} alt="logo" />}
    </div>
  );
};

export default FooterImageResponsive;
