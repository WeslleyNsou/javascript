function verificar(){

    //captura de ano atual
    var date = new Date()
    var ano = date.getFullYear()
    //capturando ano nacimento
    var anof = document.getElementById('txidade')
    
    var res = document.getElementById('res')

    if( txidade.Value.length == 0 || txidade.value > ano){
        alert('[erro] verificar novamente o ano')
    }else{
        alert('POSITIVO')
    }
}