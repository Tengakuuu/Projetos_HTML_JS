const botao = document.getElementById('botao');
const square = document.getElementById('square');

botao.addEventListener("click", function() {
    const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    square.style.backgroundColor = cor;
});