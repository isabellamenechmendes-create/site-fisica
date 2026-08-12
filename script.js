let tamanhoFonte = 20;

// AUMENTAR TEXTO
document.getElementById("aumentar").addEventListener("click", function () {

    if (tamanhoFonte < 32) {
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }

});


// DIMINUIR TEXTO
document.getElementById("diminuir").addEventListener("click", function () {

    if (tamanhoFonte > 14) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }

});


// ALTO CONTRASTE
document.getElementById("contraste").addEventListener("click", function () {

    document.body.classList.toggle("alto-contraste");

});


// VOLTAR AO NORMAL
document.getElementById("normal").addEventListener("click", function () {

    tamanhoFonte = 20;

    document.body.style.fontSize = "20px";

    document.body.classList.remove("alto-contraste");

});