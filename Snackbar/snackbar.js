const baselineBtn = document.querySelector("#baseline-btn");
const leadingBtn = document.querySelector("#leading-btn");
const stackedBtn = document.querySelector("#stacked-btn");

const baselineAlert = document.querySelector("#baseline-alert");
const leadingAllert = document.querySelector("#leading-alert");
const stackedAlert = document.querySelector("#stacked-alert");

baselineBtn.addEventListener("click", (e) => {
  baselineAlert.classList.remove("visible");
  setTimeout(() => {
    baselineAlert.classList.add("visible");
  }, 5000);
});

leadingBtn.addEventListener("click", (e) => {
  leadingAllert.classList.remove("visible");
  setTimeout(() => {
    leadingAllert.classList.add("visible");
  }, 5000);
});

stackedBtn.addEventListener("click", (e) => {
  stackedAlert.classList.remove("visible");
  setTimeout(() => {
    stackedAlert.classList.add("visible");
  }, 5000);
});

const baselineCancelBtn = document.querySelector(
  "#baseline-alert .snackbar-cancel"
);
const leadingCancelBtn = document.querySelector(
  "#leading-alert .snackbar-cancel"
);
const stackedCancelBtn = document.querySelector(
  "#stacked-alert .snackbar-cancel"
);

baselineCancelBtn.addEventListener("click", () => {
  baselineAlert.classList.add("visible");
});

leadingCancelBtn.addEventListener("click", () => {
  leadingAlert.classList.add("visible");
});

stackedCancelBtn.addEventListener("click", () => {
  stackedAlert.classList.add("visible");
});
