function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Varifique os dados e tente novamente!')
    }else{
         var fsex = document.getElementsByName ('radsex')
         var idade = ano  - Number(fano.value)
         res.innerHTML`Idade Calculada: ${idade}`
    }
}