const Card = document.querySelector(".card");

document.getElementById("Card-Options").addEventListener("click", (e) => {
  Card.className = `card ${e.target.value}`;
});
