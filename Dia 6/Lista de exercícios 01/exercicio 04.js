//Exercicio 04 # Dia 06 (tabuada)

//Entrada 
    let escolha = parseInt(prompt('Digite um número de sua preferência:'))
    
//Criando tabuada   
//For
for(let tabuada = escolha; tabuada <= escolha + 2; tabuada++){
        console.log('Tabuada do número: ' + tabuada);
    for(let algoritimo = 0; algoritimo <= 10; algoritimo++){
        console.log(tabuada + " x " + algoritimo + " = " + (tabuada * algoritimo))
    }
}
