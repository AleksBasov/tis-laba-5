const btn = document.querySelector("button");
const input = document.querySelector("#elem");

function showInputType() {
 
 console.log(input.type)
}

btn.addEventListener("click", showInputType)