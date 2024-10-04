var num = document.getElementById(`num`)
var res = document.getElementById(`res`)
var lista = document.getElementById(`selecf`)
var valores = []

//Verifica se o numero esta de 1 a 100
function numero(n){
    if( Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
//Verifica se o numero estar na lista por meio de um indexOf, no qual se o numero não for encontrado sera mostrado -1
function inlist(n, l){
    if( l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function add(){
    if(numero(num.value) && !inlist(num.value, valores)){
        valores.push(Number(num.value))

        var item = document.createElement(`option`)
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    }else{
        alert(`Valor invalido ou não encontrado na lista !`)
    }
    //deixa a caixa vazia após adicionar um numero
    num.value = ``
    num.focus()
}