/* document = HTML 
queryselector = selecina ou pega um item do HTML */

let botaoSon = document.querySelector(".botao-som")
let video = document.querySelector(".video")

botaoSon.addEventListener("click", ligaSon)

function ligaSon(){
    video.muted = false
}