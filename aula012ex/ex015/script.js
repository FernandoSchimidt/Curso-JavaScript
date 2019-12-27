function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 ||Number (fAno.value) > ano){
        window.alert('[ERRO] Varifique os dados e tente novamente!')
    }else{
         var fsex = document.getElementsByName ('radsex')
         var idade = ano  - Number(fano.value)
        var genero = ''
        var img  = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'nome do arquivo')
            }else if (idade <= 21){
                img.setAttribute('src', 'nome do arquivo')
            }else if(idade <= 50){
                img.setAttribute('src', 'nome do arquivo')
            }else{
                img.setAttribute('src', 'nome do arquivo')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'nome do arquivo')
            }else if (idade <= 21){
                img.setAttribute('src', 'nome do arquivo')
            }else if(idade <= 50){
                img.setAttribute('src', 'nome do arquivo')
            }else{
                img.setAttribute('src', 'nome do arquivo')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}