function tab(){
    var n = document.getElementById(`num`)
    var seltab = document.getElementById(`seltab`)


    if(n.value.length == 0){
        alert(`[ERRO] Digite um número`)
    }else{
        var num = Number(n.value)
        seltab.innerHTML = ''
        for(var cal = 1; cal <= 10; cal += 1 ){
            var item = document.createElement('option')
            item.text = `${num} X ${cal} = ${num*cal}`
            item.value = `tab${cal}`
            seltab.appendChild(item)
        }
    }
}