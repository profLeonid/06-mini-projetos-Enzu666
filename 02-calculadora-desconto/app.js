'use strict'

const calcularValorEconomizado = (preco, desconto) => preco * desconto /100

const calcularPrecoFinal = (preco, valorEconomizado) => preco - valorEconomizado

function escolherCor(desconto){
    if(desconto <= 5){
        return 'desconto1'
    }else if(desconto <= 10){
        return 'desconto2'
    }else{
        return 'desconto3'
    }
} 

function tratarClick(){
    const preco = Number(document.getElementById('preco').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorEconomizado = calcularValorEconomizado(preco, desconto)
    const precoFinal = calcularPrecoFinal(preco, valorEconomizado)

    const cor = escolherCor(desconto)

    resultado.textContent = `${valorEconomizado} - ${precoFinal}`
    resultado.classList.remove('desconto1', 'desconto2', 'desconto3')
    resultado.classList.add(cor)
}