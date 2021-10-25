const price = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "bounce.out",
    },
  });
  price.from(".price-letters", {
    y: "100%",
    opacity: 0,
    stagger: 0.2,
  });
  