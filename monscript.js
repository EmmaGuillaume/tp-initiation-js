/* Toutes les variables */
let li = document.querySelector("#listeCourses li");
let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString("fr-FR");
let h2 = document.querySelector("h2");
h2.innerHTML = h2.innerHTML + " : " + dateJourFr;

let myInput = document.getElementById("myInput");
let btn = document.querySelector("span");
let liste = document.querySelector("ul");

/* Tous les évènements */
li.addEventListener("click", (e) => {
  e.target.classList.toggle("itemCheck");
});

btn.addEventListener("click", (e) => {
  addProduct(myInput.value);
  myInput.value = "";
});

myInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(e);
    addProduct(myInput.value);
    myInput.value = "";
  }
});

/* Les fonctions */
// A voir plus tard
function addProduct(text) {
  if (text != "") {
    console.log(text);
    let newLi = document.createElement("li");
    newLi.textContent = text;
    liste.appendChild(newLi);
    newLi.addEventListener("click", (e) => {
      e.target.classList.toggle("itemCheck");
    });
  } else {
    alert("Champs vide");
  }
}
