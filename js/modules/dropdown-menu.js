import outsideClick from "./outsideclick.js";
export default function DropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userevent) => {
      menu.addEventListener(userevent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
