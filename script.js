function envoyerMessage(event) {
  event.preventDefault(); // Empêche l'envoi réel du formulaire

  const confirmation = document.getElementById("confirmation");
  confirmation.style.display = "block";
  confirmation.style.opacity = 0;

  // Animation d'apparition
  let opacité = 0;
  const fade = setInterval(() => {
    opacité += 0.05;
    confirmation.style.opacity = opacité;
    if (opacité >= 1) clearInterval(fade);
  }, 30);

  // Masquer le message après 4 secondes
  setTimeout(() => {
    confirmation.style.display = "none";
  }, 4000);

  // Optionnel : reset du formulaire
  event.target.reset();
}


function toggleMenu() {
  const menu = document.getElementById("menuMobile");
  menu.classList.toggle("active");
}

