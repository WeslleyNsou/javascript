
function contar(){
    var ni = document.getElementById(`ni`)
    var nf = document.getElementById(`nf`)
    var pass = document.getElementById(`pass`)
    var res = document.getElementById(`res`)


    if(ni.value.length == 0 || nf.value.length == 0 || pass.value.length == 0){
        alert(`[ERRO] faltam dados!`)
        res.innerHTML = `Impossivel contar`
    } else{
        res.innerHTML = 'contandor: <br>'
        var i = Number(ni.value)
        var f = Number(nf.value)
        var p = Number(pass.value)

        if (p <= 0){
            alert(`[ERRO] passo invalido! Passo valera 1`)
            p = 1
        }
    } if (i < f){
        for( var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449}`
    }
    } else{
        for (var c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }
    res.innerHTML += `\u{1f3c1}`
}