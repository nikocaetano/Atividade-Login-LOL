let input = document.querySelector ('.input1')
let input2 = document.querySelector ('.input2')
let button = document.querySelector ('.loginButton')
let seta = document.querySelector ('.seta')

input.addEventListener('input', habilitar)
input2.addEventListener('input', habilitar)

function habilitar(){
    if (input.value.length >=1 && input2.value.length >= 8){
        button.classList.add('liberado')
        seta.classList.add('liberado')
    } else{
        button.classList.remove('liberado')
        seta.classList.remove('liberado')
    } 
} 