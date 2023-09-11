const btn = document.querySelector("button");
const text = document.querySelector("p");

function changeText() {
    text.textContent = "Новый текст в абзаце";
   }
   
   btn.addEventListener("click", changeText);
   