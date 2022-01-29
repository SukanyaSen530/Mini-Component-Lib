// Open Dialog Box

const alertBtn = document.querySelector("#demo-section-1 .demo-section-btn");
const simpleBtn = document.querySelector("#demo-section-2 .demo-section-btn");
const conformationBtn = document.querySelector(
  "#demo-section-3 .demo-section-btn"
);

alertBtn.addEventListener("click", () => {
  const dialog = document.querySelector(
    `#${alertBtn.getAttribute("data-modal-target")}`
  );
  const overlay = dialog.nextElementSibling;

  openDialog(dialog, overlay);
});

simpleBtn.addEventListener("click", () => {
  const dialog = document.querySelector(
    `#${simpleBtn.getAttribute("data-modal-target")}`
  );

  const overlay = dialog.nextElementSibling;
  openDialog(dialog, overlay);
});

conformationBtn.addEventListener("click", () => {
  const dialog = document.querySelector(
    `#${conformationBtn.getAttribute("data-modal-target")}`
  );
  const overlay = dialog.nextElementSibling;

  openDialog(dialog, overlay);
});

function openDialog(dialog, overlay) {
  if (dialog == null) return;
  dialog.classList.add("active");
  overlay.classList.add("active");
}

//Close Dialog Box

const dialogCloseButtons = document.querySelectorAll("[data-close-button]");

dialogCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest(".dialog");
    const overlay = dialog.nextElementSibling;
    closeDialog(dialog, overlay);
  });
});

function closeDialog(dialog, overlay) {
  if (dialog == null) return;
  dialog.classList.remove("active");
  overlay.classList.remove("active");
}

// Overlay

const overlays = document.querySelectorAll("#overlay");

overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    const dialog = overlay.previousElementSibling;
    closeDialog(dialog, overlay);
  });
});
