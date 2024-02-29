import SvgMenu from "../../../svgs/SvgMenu";

const NavbarOpen = () => {
  return (
    <div
      onClick={() => {
        const menu = document.getElementById("menu");
        menu.classList.toggle("menu-toggle");
        menu.classList.add("animate__slideInLeft");
        menu.classList.remove("animate__slideOutLeft");
      }}
    >
      <SvgMenu />
    </div>
  );
};

export default NavbarOpen;
