var idade = 64
console.log(`Voce tem ${idade} anos`)
if(idade < 16){
    console.log('nao vota')
}else if(idade < 18 || idade > 65){
        console.log('Voto opicional')
    }else{
        console.log('Voto obrigatório')
    }
