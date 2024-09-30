let num = [5,8,4]

//Foi criado o elemento 3, e adicionado o valor 6
num[3] = 6

//Foi criado como ultimo elemento e adiciondao o valor 7
num.push(7)

//Descobrindo o comprimento do vetor
num.length

console.log(`O nosso vetor possui ${num.length} elementos`)
console.log(`Esses são os valores ${num}`)

//Exibindo valores do vetor, lembrando que inicia-se com o indice 0
console.log(`O primeiro valor do array è ${num[0]}`)

//Organizando os valores em ordem crecente, QUALQUE OUTRO VALOR DEVE SER ADICONADO ACIMA!
num.sort()
console.log(`Valores organizados ${num}.`)
console.log(`Agora o primeiro valor serà ${num[0]}`)

//Procurando volores do vetor
var pos = num.indexOf(7)
if(pos == -1){
    console.log(`Valor não encontrado!`)
}else{
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}