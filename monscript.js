/* Toutes les variables */
let li = document.querySelector("#listeCourses li");

/* Tous les évènements */
li.addEventListener("click", (e) => {
  e.target.classList.toggle("itemCheck");
});

/* Les fonctions */
// A voir plus tard
