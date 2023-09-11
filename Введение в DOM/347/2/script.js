const btn = document.querySelector("button");
const text = document.querySelector("p");

function makeBold() {
 text.innerHTML = "<strong>hello</strong>";
}

btn.addEventListener("click", makeBold);