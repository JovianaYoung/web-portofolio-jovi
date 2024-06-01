// toggle and responsive navigation
const navSlide = () => {

  portofolio.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    portofolio.classList.toggle("toggle-portofolio");
  });
};

navSlide();