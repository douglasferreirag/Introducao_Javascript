 

function increment(){

    var input = document.querySelector("#currentNumber");

    var texto = parseInt(input.value) + 1;

    console.log(texto);
      
    input.value = texto;
    

}


function decrement(){

    var input = document.querySelector("#currentNumber");

    var texto = parseInt(input.value) - 1;

    console.log(texto);
      
    input.value = texto;
    

}


