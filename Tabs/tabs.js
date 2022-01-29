const fixedTabs = document.querySelector(".fixed");

const scrollableTabs = document.querySelector(".scrollable");

fixedTabs.addEventListener("click", function (e) {
  var lis = document.querySelectorAll(".fixed>li");

  for (li of lis) {
    if (li.classList.contains("active")) li.classList.remove("active");
  }

  if (e.target.tagName === "LI") {
    const LI = e.target;
    LI.classList.toggle("active");
  }
});

scrollableTabs.addEventListener("click", function (e) {
  var lis = document.querySelectorAll(".scrollable>li");

  for (li of lis) {
    if (li.classList.contains("active")) li.classList.remove("active");
  }

  if (e.target.tagName === "LI") {
    const LI = e.target;
    LI.classList.toggle("active");
  }
});
