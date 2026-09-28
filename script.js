
let students = [];
let cities = new Set();
let notes = new Map();

function addStudent(name, age, note) {

    let message = "";

    if (age >= 18) {
        message = "Majeur";
    } else {
        message = "Mineur";
    }

    let bonus = note + 1;

    let finalNote = Math.min(bonus, 20);

    let student = {
        name: name,
        age: age,
        note: finalNote,
        status: message
    };

    students.push(student);

    cities.add("Casablanca");

    notes.set(name, finalNote);

    return student;
}


document.getElementById("btn").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let note = Number(document.getElementById("note").value);

    name = name.toUpperCase();

    if (name === "" || age <= 0 || note < 0 || note > 20) {

        document.getElementById("result").innerHTML =
            "Veuillez entrer des informations correctes.";

        return;
    }


    let student = addStudent(name, age, note);


    let date = new Date();


    document.getElementById("result").innerHTML = `
        <h2>Résultat</h2>

        <p>Nom : ${student.name}</p>
        <p>Age : ${student.age}</p>
        <p>Note : ${student.note}/20</p>
        <p>Statut : ${student.status}</p>
        <p>Date : ${date.toLocaleDateString()}</p>

        <h3>Liste des étudiants</h3>
    `;


    students.forEach(function (item) {

        document.getElementById("result").innerHTML +=
            `<p>${item.name} - ${item.note}/20</p>`;

    });


    console.log("Cities :", cities);

    console.log("Notes :", notes);

});
