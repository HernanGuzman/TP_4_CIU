var $butonMoney = document.getElementById("#money")
$butonMoney.addEventListener("click", function(){
    document.querySelector("#imgMoney").classList.toggle("oculto")
    
})
var $butonMoney = document.getElementById("#miami")
$butonMoney.addEventListener("click", function(){
    document.querySelector("#imgMiami").classList.toggle("oculto")
    
})
var $butonMoney = document.getElementById("#richi")
$butonMoney.addEventListener("click", function(){
    document.querySelector("#imgRichi").classList.toggle("oculto")
    
})

var $images = document.querySelectorAll("img")
for(var i = 0; i < $images.length; i++){
    $images[i].addEventListener("click", function(){
        this.classList.toggle("oculto")
    })
}