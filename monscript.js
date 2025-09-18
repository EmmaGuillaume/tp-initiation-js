// let number = 5;
// let text = '5';
// let isRainingToday = true;

// if (number == text){
// 	console.log("double égale")
// }
// if (number === text){
// 	console.log("triple monstre")
// }
// if (isRainingToday){
// 	console.log(isRainingToday)
// }


let age = prompt('Ton age');

if (age <18){
	console.log("T'es mineur")
}
else if(age >18 && age<62){
	console.log("T'es majeur")
}
else {
	console.log("T'es majeur et retraité")
}