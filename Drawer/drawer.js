const hamburgerMenu1 = document.querySelector("#dismissible");

hamburgerMenu1.addEventListener("click", () => {
  const mainPage = hamburgerMenu1.closest(".main-page");
  const drawer = mainPage.previousElementSibling;

  drawer.classList.toggle("visible");
});
