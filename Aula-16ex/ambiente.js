var num = document.getElementById(`num`) 
var selcf = document.getElementById(`selcf`)
var res = document.getElementById(`res`)
var valor = []

function isnum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inlist(n, l){
    if(l.indexof(Number(n)) != -1 ){
        return true
    }else{
        return false
    }
}

function add(){

    if(isnum(num.value) && !inlist(num.value, valor)){
        alert(`tudo ok`)
    } 
}