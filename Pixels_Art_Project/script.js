window.onclick = function() {
    console.log(event.target);
    let selection = document.querySelector(".selected");
    if(event.target.className === "color") {
        event.target.classList.add("selected");
        selection.classList.remove("selected");
        selection = document.querySelector(".selected");
    }
    if(event.target.className === "pixel") {
        event.target.style.backgroundColor = selection.style.backgroundColor;
    }
}
const all = document.querySelectorAll(".pixel");
function limpar(){
    for (let i = 0; i < all.length; i += 1) {
        all[i].style.backgroundColor = "white";
    }
}
const botaoLimpar =  document.querySelector("#clear-board");
botaoLimpar.addEventListener("click", limpar);

const botaoBorda = document.querySelector("#generate-board");
botaoBorda.addEventListener("click", function() {
    const caixaTamanho = document.querySelector("#board-size");
    let tamanho = parseInt(caixaTamanho.value);
    if (tamanho < 5) {
        tamanho = 5;
    }
    if (tamanho > 50) {
        tamanho = 50;
    }
    if(caixaTamanho.value === ""){
        alert("Board inválido!");
    } else {
        document.querySelector("#pixel-board").remove();
        let caixaPixelPai = document.createElement("div");
        caixaPixelPai.id = "pixel-board";
        document.querySelector("#container").appendChild(caixaPixelPai);
        for (let i = 0; i < tamanho; i++) {
            for (let i = 0; i < tamanho; i++) {
                let caixaPixel = document.createElement("div");
                caixaPixel.className = "pixel";
                document.querySelector("#pixel-board").appendChild(caixaPixel);
            }
            let pularLinha = document.createElement("br");
            document.querySelector("#pixel-board").appendChild(pularLinha);
        }
    }
})
function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++ ) {
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}
for(let i = 1; i < 4; i++) {
    let divCor = document.createElement("div");
    divCor.className = "color";
    divCor.style.backgroundColor = gera_cor();
    document.querySelector("#color-palette").appendChild(divCor);    
}

