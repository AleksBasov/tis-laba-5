const btn = document.querySelector("button");
const input = document.querySelector("#elem");

function changeInputType() {
  input.setAttribute("type", "submit");
}

btn.addEventListener("click", changeInputType);