const btn = document.querySelector("button");
const text = document.querySelector("p");
function readHTML() {
    console.log(text.innerHTML);
   }
   
   btn.addEventListener("click", readHTML);