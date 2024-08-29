var ni = document.getElementById(`ni`)
var nf = document.getElementById(`nf`)
var pass = document.getElementById(`pass`)

function contar(){

    if(ni.value.length == 0 || nf.value.length == 0){
        alert(`[ERRO] e necessario digitar um numero!`)
    }

    for(ni ; nf <= ni; ni += pass) {
        console.log(ni)
    }

    res.innerHTML = ${'ni'}
}