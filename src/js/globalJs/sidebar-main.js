const btns = document.querySelectorAll(".fas-js");
const sidebar = document.querySelector(".sidebar");
const sidebarHeader = document.querySelector(".sec-center");
const tl = gsap.timeline({
  defaults: { duration: 0.3, ease: "circ.in" },
});
tl.paused(true);
tl
.to(sidebar, {
  clipPath: " circle(100% at 0% 0%)",
  opacity: 1,
})
.to(".btn-sidebar", {
  y: 0,
  opacity: 1,
  stagger: .3,
});
export function sidebartoggle() {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("fa-bars")) {
        tl.play();
      } else if (e.currentTarget.classList.contains("fa-times")) {
        tl.timeScale(3);
        tl.reverse();
      }
    });
  });
}
sidebartoggle();
