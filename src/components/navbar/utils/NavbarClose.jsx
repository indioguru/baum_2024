import SvgCloseTwo from "../../../svgs/SvgCloseTwo";

const NavbarClose = () => {
  return (
    <div
      onClick={() => {
        const menu = document.getElementById("menu");
        menu.classList.add("animate__slideOutLeft");
        setTimeout(() => {
          menu.classList.toggle("menu-toggle");
          menu.classList.remove("animate__slideInLeft");
        }, 500);
      }}
    >
      <SvgCloseTwo />
    </div>
  );
};

export default NavbarClose;
