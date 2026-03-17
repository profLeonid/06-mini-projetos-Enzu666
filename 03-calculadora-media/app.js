'use strict'

const calcularMedia = (n1, n2, n3) => (n1 + n2 + n3)/3

function situacaoDoAluno(mediaAluno){
    if(mediaAluno >= 7){
        return 'Aprovado'
    }else if(mediaAluno >= 5 && mediaAluno <= 6.9){
        return 'Recuperação'
    }else{
        return 'Reprovado'
    }
}

function escolherCor(situacao){
    if(situacao === "Aprovado"){
        return 'aprovado'
    }else if (situacao === "Recuperação"){
        return 'recuperacao'
    }else{
        return 'reprovado'
    }
}

function tratarClick(){
    const numero1 = Number(document.getElementById('n1').value)
    const numero2 = Number(document.getElementById('n2').value)
    const numero3 = Number(document.getElementById('n3').value)

    const media = calcularMedia(numero1, numero2, numero3)
    const situacao = situacaoDoAluno(media)  
    const cor = escolherCor(situacao)

    resultado.textContent = `${situacao} - Média: ${media.toFixed(2)}`
    resultado.classList.remove('aprovado', 'recuperacao', 'reprovado')
    resultado.classList.add(cor)
}