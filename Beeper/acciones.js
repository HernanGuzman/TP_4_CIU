window.onload=function(){
    var $boton = document.querySelector("button")
    console.log($boton.textContent)
$boton.addEventListener("click", function(){
    var $parrafo = document.querySelector("p")
     $parrafo.textContent = $parrafo.textContent + " BEEP"
     var $body = document.querySelector("body")
     $body.classList.toggle("color")
})
}    