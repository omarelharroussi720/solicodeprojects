for (let nombre = 1; nombre <= 20; nombre++) {
    if (nombre % 2 === 0) {
        console.log(nombre);
    }
}

let somme = 0;

for (let i = 1; i <= 10; i++) {
    somme = somme + i;
}

console.log("Somme : " + somme);

let compteur = 0;
let sommePairs = 0;

for (let nombre = 1; nombre <= 20; nombre++) {
    if (nombre % 2 === 0) {
        compteur++;
        sommePairs = sommePairs + nombre;
    }
}

console.log("Nombre de pairs : " + compteur);
console.log("Somme des pairs : " + sommePairs);
