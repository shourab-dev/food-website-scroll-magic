let controller = new ScrollMagic.Controller();

let timeline = new gsap.timeline();
timeline.from(".ingri_1", {
  x: -50,
  y: -100,
  duration: 4,
  ease: "Power3.easeInOut",
});
timeline.from(
  ".ingri_2",
  {
    x: -250,
    y: -120,
    duration: 4,
    ease: "Power3.easeInOut",
  },
  "-=4"
);
timeline.from(
  ".ingri_3",
  {
    x: -300,
    y: -80,
    duration: 4,
    ease: "Power3.easeInOut",
  },
  "-=4"
);
timeline.from(
  ".ingri_4",
  {
    x: -250,
    y: -350,
    duration: 4,
    ease: "Power3.easeInOut",
  },
  "-=4"
);
timeline.from(
  ".ingri_5",
  {
    x: -400,
    y: -100,
    duration: 4,
    ease: "Power3.easeInOut",
  },
  "-=4"
);
timeline.from(
  ".ingri_6",
  {
    x: -150,
    y: -150,
    duration: 4,
    ease: "Power3.easeInOut",
  },
  "-=4"
);
timeline.from(
  ".ingri_7",
  {
    x: -280,
    y: -20,
    duration: 4,
    ease: "Power3.easeInOut",
  },
  "-=4"
);
timeline.from(
  ".ingri_8",
  {
    x: -400,
    y: -150,
    duration: 4,
    ease: "Power3.easeInOut",
  },
  "-=4"
);
timeline.from(
  ".ingri_9",
  {
    x: -250,
    y: -60,
    duration: 4,
    ease: "Power3.easeInOut",
  },
  "-=4"
);

let scene = new ScrollMagic.Scene({
  triggerElement: "#ingredient",
  duration: "100%",
  triggerHook: 0,
  offset: "300px",
})
  .setTween(timeline)
  .setPin("#ingredient")
  .addTo(controller);

//   1st section end

// 2nd section

let timeline2 = new gsap.timeline();
timeline2.to(".top_wrapper", {
  height: 0,
  duration: 5,
  ease: "Power3.easeInOut",
});

let scene2 = new ScrollMagic.Scene({
  triggerElement: "#vegies",
  duration: "100%",
  triggerHook: 0,
  offset: "100px",
})
  .setTween(timeline2)
  .setPin("#vegies")
  .addTo(controller);
// 2nd section close

// 3rd section starts

let timeline3 = new gsap.timeline();
timeline3.to(
  ".f_text",
  4,
  {
    width: "30px",
    x: -510,
    y: 200,
    fontSize: "4rem",
    zIndex: 99,
    color: "black",
    position: "absolute",
    ease: "Power3.easeInOut",
  },
  "-=4"
);

timeline3.to(
  ".slice_text",
  4,
  {
    width: "30px",
    x: 300,
    y: 200,
    fontSize: "4rem",
    zIndex: 99,
    position: "absolute",
    ease: "Power3.easeInOut",
  },
  "-=4"
);

timeline3.to(
  ".f_text",
  4,
  {
    width: "30px",

    ease: "Power3.easeInOut",
  },
  "-=2"
);
timeline3.to(
  ".slice_text",
  4,
  {
    width: "30px",

    ease: "Power3.easeInOut",
  },
  "-=2"
);
// timeline3.to(".slice_heading", 4, {
//   duration: 4,
//   y: 185,
//   fontSize: "5rem",
//   setPin: "slice_heading",
//   ease: "Power3.easeInOut",
// });

// slice img animation here
timeline3.to(
  ".sl_1",
  8,
  {
    y: -200,
    ease: "Power3.easeInOut",
    delay: 4,
  },
  "-=8"
);
timeline3.to(
  ".sl_2",
  8,
  {
    y: -180,
    ease: "Power3.easeInOut",
  },
  "-=8"
);
timeline3.to(
  ".sl_3",
  8,
  {
    y: -50,
    ease: "Power3.easeInOut",
  },
  "-=8"
);
timeline3.to(
  ".sl_4",
  8,
  {
    y: 50,
    ease: "Power3.easeInOut",
  },
  "-=8"
);
timeline3.to(
  ".sl_5",
  8,
  {
    y: 150,
    ease: "Power3.easeInOut",
  },
  "-=8"
);
timeline3.to(
  ".sl_6",
  8,
  {
    y: 200,
    ease: "Power3.easeInOut",
  },
  "-=8"
);

let scene3 = new ScrollMagic.Scene({
  triggerElement: "#slice",
  duration: "100%",
  triggerHook: 0,
  offset: "100px",
})
  .setTween(timeline3)
  .setPin("#slice")
  .addTo(controller);

// section 3 end here

// section 4 starts here

let timeline4 = new gsap.timeline();

timeline4.from(".pizza_wrapper > *", {
  stagger: 1,
  opacity: 0,
});

let scene4 = new ScrollMagic.Scene({
  triggerElement: "#newyork_pizza",
  triggerHook: 0,
  offset: 200,
  duration: "100%",
})
  .setTween(timeline4)
  .setPin("#newyork_pizza")
  .addTo(controller);
