const cidades = {

    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],

    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],

}

let divCidades = document.querySelector('#div-cidades')
let selectEstado = document.querySelector('#estado')
let selectCidades = document.querySelector('#cidades')

selectEstado.addEventListener('change', function(){

    if (!selectEstado.value){
        divCidades.classList.add('cidades')
    }else{

        let listaCidades

        if(selectEstado.value === 'sp'){
            listaCidades = cidades.sp
        }

        if(selectEstado.value === 'rj'){
            listaCidades = cidades.rj
        }

        let htmlCidades = '<option value="">-- Selecione a cidade --</option>'

        for(let cidade of listaCidades){
            htmlCidades += `<option value="${selectEstado.value}">${cidade}</option>` 
        }
        
        selectCidades.innerHTML =htmlCidades
        divCidades.classList.remove('cidades')
    }

})

let form = document.querySelector('#form-cadastro')

form.onsubmit = function(e){
    e.preventDefault()

    let temErro = false

    let selectEstado = document.forms['form-cadastro']['estado']

    if(!selectEstado.value){
        temErro = true
        selectEstado.classList.add('select-error')
        let span = selectEstado.nextSibling.nextSibling 
        span.innerText = 'Selecione um estado'
    }else{
        selectEstado.classList.remove('select-error')
        let span = selectEstado.nextSibling.nextSibling 
        span.innerText = ''
    }

    let selectCidades = document.forms['form-cadastro']['cidades']

    if(!selectCidades.value){
        temErro = true
        selectCidades.classList.add('select-error')
        let span = selectCidades.nextSibling.nextSibling 
        span.innerText = 'Selecione uma cidade'
    }else{
        selectCidades.classList.remove('select-error')
        let span = selectCidades.nextSibling.nextSibling 
        span.innerText = ''
    }

    if (!temErro){
        form.submit()
    }
}