const btn = document.querySelector("button");
const text = document.querySelector("p");
function showMessage() {
 console.log(text.textContent);
}
btn.addEventListener("click", showMessage)