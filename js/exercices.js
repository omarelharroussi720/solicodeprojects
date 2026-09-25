const prompt = require('prompt-sync')();

let article = prompt("Nom de l'article :");
let prix = Number(prompt("Prix :"));
let quantite = Number(prompt("Quantité :"));

let total = prix * quantite;

console.log("Article :", article);
console.log("Prix :", prix);
console.log("Quantité :", quantite);
console.log("Total :", total);
