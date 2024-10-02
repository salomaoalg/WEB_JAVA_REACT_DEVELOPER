function mensagem2(){
    alert("DISPARO 2")
}

function mensagem1(){
    alert("DISPARO 1")
}

window.onload = function(){
    var botao = document.querySelector(".disparo")
    botao.addEventListener('click', mensagem1)
    botao.addEventListener('click', mensagem2)
}