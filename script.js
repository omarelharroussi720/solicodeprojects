let SecretNumber = Math.floor(Math.random() * 100) + 1;
let att = 0;

let GusseNumber = document.getElementById("gusse");
let BtnSubmit = document.getElementById("btn-submit");
let Message = document.getElementById("message");
let AttemptMessage = document.getElementById("attempt");
let BtnRestart = document.getElementById("restart");


BtnSubmit.addEventListener("click",() =>{
    checkNumber();
});

BtnRestart.addEventListener("click", () =>{
      restart();
});
AttemptMessage.textContent = att;

function checkNumber() {
    let gusse = Number(GusseNumber.value);

    if (!gusse || gusse < 1 || gusse > 100) {
        Message.textContent = "THE NUMBER IS INVALID";
        Message.style.color = "red";
        return;
    }

    att++;
    AttemptMessage.textContent = att;

    if (gusse < SecretNumber) {
        Message.textContent = "THE NUMBER IS HIGHER";
        Message.style.color = "orange";
    } 
    else if (gusse > SecretNumber) {
        Message.textContent = "THE NUMBER IS LOWER";
        Message.style.color = "orange";
    } 
    else {
        Message.textContent = "YOU WON! THE NUMBER WAS " + SecretNumber;
        Message.style.color = "green";
    }
}


function restart(){
    att = 0;
    AttemptMessage.textContent = ""
    Message.textContent = "";
    SecretNumber = Math.floor(Math.random() * 100) + 1;
    GusseNumber.value = ""
}