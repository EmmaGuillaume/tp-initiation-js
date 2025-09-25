/* Toutes les variables */
let li = document.querySelector("#listeCourses li");

/* Tous les évènements */
li.addEventListener("click", (e) => {
  console.log("a");
  e.target.style.backgroundColor = "lightblue";
  e.target.style.textDecoration = "line-through";
});

/* Les fonctions */
// A voir plus tard
