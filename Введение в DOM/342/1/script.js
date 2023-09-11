const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", func1);
button2.addEventListener("click", func2);

function func1() {
	console.log(1);
}

function func2() {
	console.log(2);
}