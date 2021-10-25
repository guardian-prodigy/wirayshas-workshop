const btns = document.querySelectorAll(".fas-js");
const sidebar = document.querySelector(".sidebar");
const mainCenter = document.querySelector(".sec-center");
let query = window.matchMedia("(max-width: 700px)");
const tl = gsap.timeline({
  defaults: { duration: 0.3, ease: "circ.in" },
});
tl.paused(true);
tl.to(sidebar, {
  clipPath: " circle(100% at 0% 0%)",
  opacity: 1,
}).to(".btn-sidebar", {
  y: 0,
  opacity: 1,
  stagger: 0.3,
});
export function sidebartoggle() {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("fa-bars")) {
        if (query.matches) {
          mainCenter.classList.toggle("sec-center-hidden");
          tl.play();
        } else {
          sidebar.classList.toggle("show-sidebar");
        }
      } else if (e.currentTarget.classList.contains("fa-times")) {
        ("sec-center-hidden");
        if (query.matches) {
          tl.timeScale(3);
          tl.reverse();
          mainCenter.classList.remove;
        } else {
          sidebar.classList.remove("show-sidebar");
        }
      }
    });
  });
}
sidebartoggle();
