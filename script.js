let form = document.getElementById("FormLogin");

form.addEventListener("submit", async function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let response = await fetch("/login",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({email: email, password: password})
    })

    let data = await response.json();
    document.getElementById("message").textContent = data.message;
})

async function GetData(){
    let response = await fetch("/login");
    let data = await response.json();
    console.log(data);
}