let prix = 80;
let budget = 100;

console.log(prix < budget);
console.log(prix === budget);
console.log(prix !== budget);

let estAbordable = prix <= budget;
console.log(estAbordable);

let disponible = true;
let paiement = false;

let acheter = prix <= budget && disponible === true;
console.log(acheter);

let commander = disponible === true || paiement === true;
console.log(commander);

let age = 22;
let inscrit2 = true;
let paiement2 = false;

console.log(age >= 18);
console.log(inscrit2 === true);
console.log(paiement2 === true);
console.log(age >= 18 && inscrit2 === true);
console.log(inscrit2 === true || paiement2 === true);
console.log(!paiement2);
