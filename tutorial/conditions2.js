let note = 12;

if (note >= 16) {
  console.log("Très bien");
} else if (note >= 10) {
  console.log("Validé");
} else {
  console.log("Non validé");
}

let temperature = 28;

if (temperature < 10) {
  console.log("Froid");
} else if (temperature < 25) {
  console.log("Doux");
} else {
  console.log("Chaud");
}

let noteApprenant = 14;
let presence = 90;

if (noteApprenant >= 10 && presence >= 80) {
  console.log("Validé");
} else {
  console.log("Non validé");
}
