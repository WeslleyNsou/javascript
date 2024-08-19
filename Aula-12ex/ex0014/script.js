function carregar(){
    //cria um objeto para mensagem e outro para imagem
    var  msg = document.getElementById(`msg`)
    var img = document.getElementById(`img`)

    //Captura a hora atual do computador
    var agora = new Date()
    var hora = agora.getHours()

    //objeto mendagem
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#c29744'
    }else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#794d59'
    }else{
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#001934'
    }
}