
let panier = [15, 42, 5, 89, 12, 50, 8];

let somme = 0;
let nombreArticlesChers = 0;
let sommeArticlesChers = 0;

for (let i = 0; i < panier.length; i++) {
    somme = somme + panier[i];

    if (panier[i] >= 20) {
        nombreArticlesChers++;
        sommeArticlesChers = sommeArticlesChers + panier[i];
    }
}

console.log("Total du panier :", somme);
console.log("Nombre d'articles chers :", nombreArticlesChers);
console.log("Montant des articles chers :", sommeArticlesChers);
