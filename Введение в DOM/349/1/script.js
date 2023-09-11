const btn = document.querySelector("button");
const input = document.querySelector("#elem");

function writeTextToInput() {
  input.value = "hello";
}

btn.addEventListener("click", writeTextToInput);

  