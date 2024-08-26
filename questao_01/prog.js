let resposta = document.getElementById("resposta")
let limite = document.getElementById("limite")
let array = []

function gravar(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)
    let num4 = Number(document.getElementById("num4").value)
    let num5 = Number(document.getElementById("num5").value)

    if(array.length < 5){

    array.push(num1)
    array.push(num2)
    array.push(num3)
    array.push(num4)
    array.push(num5)
    
}else{
    limite.innerHTML = "ja chegou no nivel limite do tamanho do array"
}
    console.table(array)

    media()
}

function media(){
    let media = 0
    let soma = 0
    for(let i = 0; i<5; i++){
        soma = soma + array[i]
        console.log(soma)
    }
    media = soma / array.length
    resposta.innerHTML = "O calculo fica = " + media
}