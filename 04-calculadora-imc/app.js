'use strict'

const calculoImc = (altura, peso) => peso/(altura*altura)

function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso'
    }else if(imc >= 18.5 && imc <= 24.9){
        return 'Peso ideal'
    }else if(imc >= 25 && imc <= 29.9){
        return 'Sobrepeso'
    }else if(imc >= 30 && imc <= 34.9){
        return 'Obesidade 1'
    }else if(imc >= 35 && imc <= 39.9){
        return 'Obesidade 2'
    }else{
        return 'Obesidade 3'
    }
}

function escolherCor(resultado){
    if(resultado === 'Abaixo do peso'){
        return 'baixoPeso'
    }else if(resultado === 'Peso ideal'){
        return 'pesoIdeal'
    }else if(resultado === 'Sobrepeso'){
        return 'sobrepeso'
    }else if(resultado === 'Obesidade 1'){
        return 'obesidade1'
    }else if(resultado === 'Obesidade 2'){
        return 'obesidade2'
    }else{
        return 'obesidade3'
    }
}

function tratarClick(){
    const peso = Number(document.getElementById('peso1').value)
    const altura = Number(document.getElementById('altura1').value)
    const nome = Number(document.getElementById('nome1').value)

    const imc = caclculoImc(altura, peso)
    const resultado = classificarImc(imc)
    const cor = escolherCor()

    resultado.textContent = `${resultado}`
    resultado.classList.remove('nome', 'altura', 'peso')
    resultado.classList.add(cor)
}