const [input1, input2] = document.querySelectorAll('input')
const button = document.querySelectorAll('button')

function handleChange(){
    if(input1.value && input2.value.length >= 8){
        button.classList.add('liberado')
    }else{
        button.classList.remove('liberado')
    }
}
input1.addEventListener('input', handleChange)  
input2.addEventListener('input', handleChange)  
