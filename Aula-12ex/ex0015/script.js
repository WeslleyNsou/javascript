function verificar(){
    //Capturando data atual
    var date = new Date()
    var aano = date.getFullYear()
    //Capturando data do formulario
    var anof = document.getElementById('anof')
    var res = document.getElementById('res')

    if (anof.value.length == 0 || Number(anof.value) >= aano){
        alert(`[ERRO] tente novamente!`)
    }else{
        var sex = document.getElementsByName('raid')
        var idade = aano - Number(anof.value)
        var genero = ''

        if(sex[0].checked){
            genero = 'Homen'
        }else{
            genero = 'Mulher'
        }

        res.innerHTML= `Sua idade e de ${idade} anos`
    }
}