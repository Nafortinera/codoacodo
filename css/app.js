const nombre = document.getElementById ("nombre")
const email = document.getElementById ("email")
const comentarios = document.getElementById ("comentarios")
const form = document.getElementById ("form")
const parrafo = document.getElementById ("warnings")

form.addEventListener ("submit", e=> {

    e.preventDefault ()
    let warnings = ""
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false
    parrafo.innerHTML = ""

    if(nombre.value.length <6){
    alert("nombre muy corto")
    warnings +=`El nombre no es valido <br>`
    entrar = true
    }
    console.log (!regexEmail.test(email.value))
    if (!regexEmail.test(email.value))
    entrar = true

    if (comentarios.value.length<50){
        entrar = true

    }
    if (entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    
    }

})