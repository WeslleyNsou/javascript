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
        //Responsavel por calcular a idade
        var idade = aano - Number(anof.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            genero = 'Homen'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/crianca-m.jpg') 
            }else if(idade >= 12 && idade < 30){
                //Joven
                img.setAttribute('src', 'imagens/joven-m.jpg')
            }else if(idade >= 30 && idade < 60 ){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/crianca-f.jpg') 
            }else if(idade >= 12 && idade < 30){
                //Joven
                img.setAttribute('src', 'imagens/joven-f.jpg')
            }else if(idade >= 30 && idade < 60 ){
                //Adulto
                img.setAttribute('src', 'imagens/adulta-f.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosa-f.jpg')
            }
        }

        res.innerHTML= `Sua idade e de ${idade} anos, ${genero}`
        res.appendChild(img)
    }
}