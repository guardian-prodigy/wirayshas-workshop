const btns = document.querySelectorAll(".btn-js");
const sidebar = document.querySelector(".sidebar-subpage");
const btnSidebar = document.querySelectorAll(".btn-sidebar-subpage");
const priceCenter = document.querySelector(".prices-center");
export function sidebartoggle() {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("fa-bars")) {
        sidebar.classList.toggle("show-sidebar");
      } else if (e.currentTarget.classList.contains("fa-times")) {
        sidebar.classList.remove("show-sidebar");
      }
    });
  });
}
sidebartoggle();
export function ListItemsSidebar() {
  btnSidebar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target) {
        sidebar.classList.remove("show-sidebar");
      }
      if (e.target.classList.contains("prices-js")) {
        sidebar.classList.remove("show-sidebar");
        console.log("hi");
        priceCenter.classList.toggle("price-center-toggled");
      }
    });
  });
}
ListItemsSidebar();
