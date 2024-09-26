function add(){
    var num = document.getElementById(`num`) 
    var res = document.getElementById(`res`)

    if(num.value.length == 0){
        alert('[ERRO!] Digite um numero.')
    } else{
        for(var con = 0; con <=100; con++){
            var n = Number(num.value)
    
            res.innerText = ``
            var item = document.createElement('Option')
            item.text = `Número ${n} adicionado!`
            res.appendChild(item)
        }
    }
}