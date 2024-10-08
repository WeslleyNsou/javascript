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
        //adiciona um elemento em um array
        valores.push(Number(num.value))

        var item = document.createElement(`option`)
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        //ao adicionar um elemento o res se torna vasio
        res.innerHTML = ``
    }else{
        alert(`Valor invalido ou não encontrado na lista !`)
    }
    //deixa a caixa vazia após adicionar um numero
    num.value = ``
    num.focus()
}

function analizar(){
    if(valores.length == 0){
        alert(`Adicione valores aqui antes de continuar!`)
    }else{
        var numcad = valores.length
        var soma = 0
        var media = 0
        //<maior e menor valor
        var maior = valores[0]
        var menor = valores[0]
        for(con in valores){
            /*Se o indice do valores tiver um elemento maior que o havia sido predeterminado, permanecera o elemento como maior valor. O mesmo se aplica ao menor valor. */
            if(valores[con] > maior){
                maior = valores[con]
            }
            if(valores[con] < menor){
                menor = valores[con]
            }
            //acima esta sendo comparado os valores dos elementos, onde o maior ou o menor valor sera guardado em variaveis com seus respectivos nomes.
            //>
            soma += valores[con]
        }

        media = soma/numcad

        res.innerHTML = ``
        res.innerHTML += `<p> Ao todo temos ${numcad} numeros cadastrados. </p>`
        res.innerHTML += `<p> O maior valor é ${maior}</p>`
        res.innerHTML += `<p> O menor valor é ${menor}</p>`
        res.innerHTML += `<p> A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p> A media dos valores é ${media}</p>`
    }
}