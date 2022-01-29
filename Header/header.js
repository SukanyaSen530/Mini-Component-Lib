const shortDemoContainer = document.querySelector(".short-scroll");

shortDemoContainer.addEventListener("scroll", (e) => {
  console.log(e);
  const navbar = document.querySelector(".short-collapsed");
  navbar.classList.toggle("collapse", shortDemoContainer.scrollTop);
});
