
var idade = 18
console.log(`Voce tem ${idade} anos.`)

if (idade <=15){
    console.log(`Ainda não pode votar!`)
}else if(idade <= 17 || idade >= 67){
    console.log(`Voto opcional!`)
}else{
    console.log(`Voto obrigatorio!`)
}