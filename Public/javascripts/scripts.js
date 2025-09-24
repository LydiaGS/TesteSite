function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("show");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmation").textContent = "Merci pour votre message ! Je vous répondrai bientôt.";
});


