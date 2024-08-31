
function contar(){
    var ni = document.getElementById(`ni`)
    var nf = document.getElementById(`nf`)
    var pass = document.getElementById(`pass`)
    var res = document.getElementById(`res`)

    if(ni.value.length == 0 || nf.value.length == 0 || pass.value,length == 0){
        alert(`[ERRO] faltam dados!`)
    } else{
        res.innerHTML = 'contandor: '
        var i = Number(ni.value)
        var f = Number(nf.value)
        var pass = Number(pass.value)

        for( var c = i; c <= f; c += p){
            res.innerHTML += `${c}`
        }
    }

}