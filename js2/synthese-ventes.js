
let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

let nombreVentes = 0;
let chiffreAffaires = 0;
let maximum = ventes[0];
let minimum = ventes[0];
let nombreExceptionnelles = 0;
let chiffreAffairesExceptionnelles = 0;

for (let i = 0; i < ventes.length; i++) {
    let vente = ventes[i];

    nombreVentes++;
    chiffreAffaires = chiffreAffaires + vente;

    if (vente > maximum) {
        maximum = vente;
    }

    if (vente < minimum) {
        minimum = vente;
    }

    if (vente >= 130) {
        nombreExceptionnelles++;
        chiffreAffairesExceptionnelles =
            chiffreAffairesExceptionnelles + vente;
    }
}

console.log("Nombre total de ventes :", nombreVentes);
console.log("CA Total :", chiffreAffaires);
console.log("Vente maximum :", maximum);
console.log("Vente minimum :", minimum);
console.log("Ventes exceptionnelles :", nombreExceptionnelles);
console.log("CA des ventes exceptionnelles :", chiffreAffairesExceptionnelles);
