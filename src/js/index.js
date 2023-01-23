/* console.log('mostrar o document',document);

console.log(document.querySelector(".botao-trailer"));
 */


const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const botaoFecharModal= document.querySelector(".fechar-modal");
const linkDoVideo = video.src;


function alternaModal () {
    modal.classList.toggle("aberto") ; 
}

botaoTrailer.addEventListener("click", () => {
    alternaModal();
video.setAttribute("src", linkDoVideo);
})

botaoFecharModal.addEventListener("click", () => {
    alternaModal();
    video.setAttribute("src","");
});

