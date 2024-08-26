let resposta = document.getElementById("resposta")
let array = []

function aleatorio(){
    let valor = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    // console.log(valor)
    return valor
}

function calcular(){
    let somaPar = 0, somaImpar = 0
    let num = Number(document.getElementById("num").value)
    if( num == 5){
        for(let i=0;i < num; i++){
            array.push(aleatorio())
        }
        for(let i = 0; i < num; i++){
            if(array[i] % 2 == 0){
                somaPar += array[i]
            }else if(array[i] % 2 == 1){
            somaImpar += array[i]
            }
        }

        resposta.innerHTML = "A soma dos numeros pares é " + somaPar + "<br>"
        resposta.innerHTML += "A media dos numeros impares é " + somaImpar

    }else{

        resposta.innerHTML = "O sistema só calcula a soma para 5 numeros, digite novamente"    

    }
}