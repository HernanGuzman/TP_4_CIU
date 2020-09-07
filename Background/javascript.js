var $input = document.querySelector("#inputColor")
        $input.addEventListener("keypress", function(tecla){
            console.log("Hola")
            if(tecla.key == "Enter"){
                this.style.background = this.value
                
            }
        })