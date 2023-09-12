window.addEventListener(
  "wheel",
  (e) => {
    if (window.innerWidth >= 992)
    e.preventDefault();
    document.querySelector(".app").scrollLeft += e.deltaY * 4;
  },
  { passive: false }
);
