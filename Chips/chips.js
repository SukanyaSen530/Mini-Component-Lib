const ContentBox = document.querySelector(".content");
const InputEle = document.querySelector("#chipsInput");

InputEle.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && e.target.value.length >= 1) {
    // const Chip = document.createElement("p");
    // Chip.innerText = e.target.value;
    // Chip.classList.add("chips", "cancel");
    let Chip = `<p class="chips cancel"> ${e.target.value}</p>`;
    const range = document.createRange();
    documentFragment = range.createContextualFragment(Chip);
    ContentBox.appendChild(documentFragment);
    InputEle.value = "";
  }
});

ContentBox.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("cancel")) {
    e.target.style.display = "none";
  }
});

const draggables = document.querySelectorAll(".chips.draggable");
const containers = document.querySelectorAll(".dragdrop");

draggables.forEach((draggable) => {
  draggable.addEventListener("click", () => {
    console.log("click");
  });

  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    container.appendChild(draggable);
  });
});
