window.onload=function(){
    var $body = document.querySelector("body")
$body.addEventListener("mousedown", function(evento){
    var $image = document.querySelector("#imagen")
    
    $image.style.top = evento.clientY
    $image.style.left = evento.clientX
})
}