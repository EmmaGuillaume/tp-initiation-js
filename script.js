// let reponse = prompt('Quel est ton meme préférée ?');
// alert('Ton meme est ' + reponse);

let nomJour = 'Jeudi';
let numJour = 11;
let nomMois = 'Septembre';
let isWinter = false;

console.log( nomJour, numJour, nomMois, isWinter)

let tabJours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let tabMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

console.log(tabJours[3], tabMois[8]);

let maDateV1 = {
	"jour" : tabJours[3],
	"mois" : tabMois[8]
};

let maDateV2 = {
	"jour" : tabJours[4],
	"mois" : tabMois[10]
}

console.log(maDateV1.jour, maDateV2.mois);

let nbr1 = 3 ;
let nbr2 = 7 ;
let nbr3 = 8 ;
let nbr4 = 21 ;

let addition = nbr1+nbr2;
let soustraction = nbr4-nbr3;

console.log(addition);
console.log(soustraction);

nbr2 *=nbr1 ;
console.log(nbr2);

nbr2 +=1 ;
console.log(nbr2);

let division = nbr4 / nbr1;
console.log(division);

let modulo = nbr4%nbr1;
console.log(modulo);