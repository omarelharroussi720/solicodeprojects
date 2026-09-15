const theme = document.getElementById("theme");
const form = document.getElementById("contact");
const button = document.querySelector("#contact button");

theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    theme.textContent = document.body.classList.contains("dark")
        ? "Light Mode"
        : "Dark Mode";
});

form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("input").value;
    button.textContent = "Sent ✓";
    alert(`Thank you ${name}!`);
    form.reset();
});
