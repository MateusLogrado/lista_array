let resposta = document.getElementById("resposta")
let array = []

function aleatorio(){
    let valor = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    // console.log(valor)
    return valor
}

function calcular(){
    let soma = 0, media = 0
    let num = Number(document.getElementById("num").value)
    if( num == 5){
        for(let i=0;i < num; i++){
            array.push(aleatorio())
        }
        for(let i = 0; i < num; i++){
            soma += array[i]
        }
        media = soma / array.length
        resposta.innerHTML = "A soma dos numeros é " + soma + "<br>"
        resposta.innerHTML += "A media dos numeros é " + media
    }else{
        resposta.innerHTML = "O sistema só calcula a soma para 5 numeros, digite novamente"
    }
}