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

let age = prompt("Ton age");
console.log(age);

// if (age < 18) {
//   console.log("T'es mineur");
// } else if (age == 18) {
//   console.log("il vient d’être majeur");
// } else if (age == 25) {
//   console.log("quart siecle");
// } else if (age == 50) {
//   console.log("demi siecle");
// } else if (age == 62) {
//   console.log("retraite");
// } else if (age == 100) {
//   console.log("centenaire");
// }

switch (age) {
  case age < 18:
    console.log("T'es mineur");
    break;
  case age == 18:
    console.log("il vient d’être majeur");
    break;
  case age == 25:
    console.log("quart siecle");
    break;
  case age == 50:
    console.log("demi siecle");
    break;
  case age == 62:
    console.log("retraite");
    break;
  case age == 100:
    console.log("centenaire");
    break;
  default:
}
