const paragraphs = document.querySelectorAll("p");

function func() {
  console.log('message');
}

paragraphs.forEach(paragraph => {
  paragraph.addEventListener("click", func);
});

