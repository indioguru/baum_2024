import SvgBaum from "../../svgs/SvgBaum";
import NavbarClose from "./utils/NavbarClose";
import SvgDoble from "../../svgs/SvgDoble";
import useScrollToId from "../../hooks/useScrollToId";

import { navigate } from "astro:transitions/client";

const Navbar = ({ rute }) => {
  const scrollToId = useScrollToId();
  const fields = [
    { name: "Home" },
    { name: "Lineup" },
    { name: "Entradas" },
    // { name: "Alcancías" },
    // { name: "Galerías" },
    // { name: "Cashless" },
    // { name: "FAQS" },
  ];

  return (
    <navbar
      id="menu"
      className="bg_menu fixed bg-no-repeat bg-center bg-fixed bg-cover w-full min-h-[100vh] z-50 top-0 menu-toggle animate__animated"
    >
      <div className="container_all pt-[70px]">
        <div className="w-[50px] lg:w-[60px] ml-auto cursor-pointer">
          <NavbarClose />
        </div>

        {fields.map((item, key) => (
          <div className="group" key={key}>
            <p
              onClick={() => {
                const menu = document.getElementById("menu");

                menu.classList.add("animate__slideOutLeft");
                // setTimeout(() => {
                //   menu.classList.toggle("menu-toggle");
                //   menu.classList.remove("animate__slideInLeft");
                // }, 500);
                // scrollToId(item?.name);

                if (rute !== "/") {
                  navigate("/");
                  menu.classList.add("animate__slideOutLeft");

                  setTimeout(() => {
                    menu.classList.toggle("menu-toggle");
                    menu.classList.remove("animate__slideInLeft");
                    scrollToId(item?.name);
                  }, 1000);
                } else {
                  menu.classList.add("animate__slideOutLeft");
                  setTimeout(() => {
                    menu.classList.toggle("menu-toggle");
                    menu.classList.remove("animate__slideInLeft");
                  }, 500);
                  scrollToId(item?.name);
                }
              }}
              className=" uppercase text-[32px] pp-light text-white group-hover:text-green group-hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {item.name}
            </p>
            <div className="w-[105%] border-t opacity-50 lg:w-[150%]  group-hover:w-[40%] transition-all duration-500" />
          </div>
        ))}

        <div className="responsive_navbar">
          <div className="w-[130px] absolute bottom-[80px] lg:bottom-[180px] lg:w-[150px]">
            <SvgBaum />
          </div>
        </div>

        <div className="absolute bottom-0 w-[100%] left-0 br-red flex justify-center">
          <div className="w-[100%] max-w-[1000px]">
            <SvgDoble />
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
