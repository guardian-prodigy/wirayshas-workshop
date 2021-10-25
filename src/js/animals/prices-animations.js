const price = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "bounce.out",
    },
  });
  price.from(".animals-price", {
    y: "100%",
    opacity: 0,
    stagger: 0.2,
  });
  