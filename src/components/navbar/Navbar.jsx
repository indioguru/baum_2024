import SvgBaum from "../../svgs/SvgBaum";
import NavbarClose from "./utils/NavbarClose";
import SvgDoble from "../../svgs/SvgDoble";
import useScrollToId from "../../hooks/useScrollToId";

const Navbar = () => {
  const scrollToId = useScrollToId();
  const fields = [{ name: "Home" }, { name: "Lineup" }, { name: "Entradas" }, { name: "Cashless" }, { name: "Galerías" }, { name: "FAQS" }];
  return (
    <navbar
      id="menu"
      className="bg_menu fixed bg-no-repeat bg-center bg-fixed bg-cover w-full min-h-[100vh] z-50 top-0 menu-toggle animate__animated"
    >
      <div className="container_all pt-[70px]">
        <div className="w-[50px] ml-auto cursor-pointer">
          <NavbarClose />
        </div>

        {fields.map((item, key) => (
          <div key={key}>
            <p
              onClick={() => {
                const menu = document.getElementById("menu");
                menu.classList.add("animate__slideOutLeft");
                setTimeout(() => {
                  menu.classList.toggle("menu-toggle");
                  menu.classList.remove("animate__slideInLeft");
                }, 500);
                scrollToId(item?.name);
              }}
              className=" uppercase text-[32px] pp-light text-white hover:text-green hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {item.name}
            </p>
            <div className="w-[105%] border-t opacity-50 lg:w-[150%]" />
          </div>
        ))}

        <div className="w-[130px] absolute bottom-[80px] lg:bottom-[180px] lg:w-[200px]">
          <SvgBaum />
        </div>

        <div className="absolute bottom-0 w-[100%] left-0 br-red  flex justify-center">
          <div className="w-[100%] max-w-[1000px]">
            <SvgDoble />
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
