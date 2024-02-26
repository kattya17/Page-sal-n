const nombre= document.getElementById('name');
const numero = document.getElementById('numero');
const password = document.getElementById('password');
const form=document.getElementById('formulario');
const email=document.getElementById('email');

const mens=document.getElementById('mensaje');
function enviar(){
    exp_email= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    exp_nombremay=/^[A-Z]/;
    if(nombre.value.length<5 ){
        mens.innerHTML="El nombre debe tener mas de 5 caracteres";
        console.log('nombre asss')
    }
    if(exp_email.test(email.value)){
        alert('correcto')
    }else{
        alert('incorecto')
    }
    if (exp_nombremay.test(nombre.value)){
        alert('Nom correcto')
    }else{
        alert('nOMBRE incorecto')
    }
    
}