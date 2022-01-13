//EXERCICIO 1 e 2

let cont = document.querySelector('span')
let btnSoma = document.querySelector('.btnSoma')
let btnSubtrai = document.querySelector('.btnSubtrai')

let num = 0

let intervaloSoma
let intervaloSubtrai


btnSoma.onclick = function(){

    clearInterval(intervaloSubtrai)

    btnSoma.classList.add('back-green')
    btnSubtrai.classList.remove('back-red')
    
    intervaloSoma = setInterval(function(){
        num++  
        cont.innerText = num  
    }, 100)   
    
}


btnSubtrai.onclick = function(){

    clearInterval(intervaloSoma)

    btnSoma.classList.remove('back-green')
    btnSubtrai.classList.add('back-red')

    intervaloSubtrai = setInterval(function(){
        num-- 
        cont.innerText = num  
    }, 100)
    
}

