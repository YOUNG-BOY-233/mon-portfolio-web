
"use strict";

// Afficher automatiquement l'année actuelle dans le pied de page.
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Préparer un e-mail à partir du formulaire de contact.
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    const recipient = "papatidiane.diop@unchk.edu.sn";

    const subject = encodeURIComponent(
      "Contact depuis le portfolio - " + name
    );

    const body = encodeURIComponent(
      "Nom : " + name + "\n" +
      "Adresse e-mail : " + email + "\n\n" +
      "Message :\n" + message
    );

    window.location.href =
      "mailto:" + recipient +
      "?subject=" + subject +
      "&body=" + body;
  });
}
