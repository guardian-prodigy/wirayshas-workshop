const btns = document.querySelectorAll(".fas-js");
const sidebar = document.querySelector(".sidebar");
const sidebarHeader = document.querySelector(".sec-center");
export function sidebartoggle() {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("fa-bars")) {
        sidebar.classList.toggle("show-sidebar");
        sidebarHeader.style.visibility = "hidden";
      } else if (e.currentTarget.classList.contains("fa-times")) {
        sidebar.classList.remove("show-sidebar");
        sidebarHeader.style.visibility = "visible";
      }
    });
  });
}
sidebartoggle();
