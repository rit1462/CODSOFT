var tl = gsap.timeline();

tl.from(
  "#logo ,#headermiddle #p1,#headermiddle #p2,#headermiddle #p3, #headerend",
  {
    y: -100,
    duration: 0.7,
    delay: 0.2,
    opacity: 0,
    scale: 0,
    stagger: 0.2,
  }
);

tl.from("#foot h1", {
  y: 200,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#leftimg, #rtop, #lb ,#rightimg ", {
  scale: 0,
  opacity: 0,
  stagger: 0.3,
});

tl.from("h5", {
  scale: 0,
  opacity: 0,
});

tl.to("h5", {
  y: 15,
  repeat: -1,
  yoyo: true,
  duration: 0.5,
});