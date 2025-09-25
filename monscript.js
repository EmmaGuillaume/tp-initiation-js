/* Toutes les variables */
let li = document.querySelector("#listeCourses li");
let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR');
let h2 = document.querySelector("h2");
h2.innerHTML = h2.innerHTML+" : " + dateJourFr;

/* Tous les évènements */
li.addEventListener("click", (e) => {
  e.target.classList.toggle("itemCheck");
});

/* Les fonctions */
// A voir plus tard
