
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    
   
    if(hora >= 0 && hora <12){
        //Bom dia
        img.src = 'fotomanha.png'
        msg.innerHTML = 'Bom dia'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'fototarde.png'
        msg.innerHTML = 'Boa Tarde'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        img.src = 'fotonoite.png'
        msg.innerHTML = `Boa noite ${hora}:${minu}`
        document.body.style.background = '#515154'
    }
}
