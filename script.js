const [inputOne, inputTwo] = document.querySelectorAll('input')
const button = document.querySelectorAll('button')
console.log(inputOne, inputTwo)

function handleChange(){
    const [inputOne, inputTwo] = login
    if(inputOne.value && inputTwo.value.length >= 8){
        button.classList.add('acesso liberado')
        console.log('acesso liberado')
    }else{
        button.classList.remove('acesso negado')
    }
}
login.forEach(function(input)){
    input.addEventListener('input', handleChange)    
};