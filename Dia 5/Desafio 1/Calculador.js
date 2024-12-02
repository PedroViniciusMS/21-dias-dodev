// Desafio dia #5 (Calculadora)

// Escolha dos números / operação
let numero1 = Number(prompt('Escolha dois números de sua preferência:'))
let numero2 = Number(prompt('Escolha dois números de sua preferência:'))
let operação = parseInt(prompt("Escolha qual operação matemática realizar:" + "\n1Somar = +; \n2Subtrair = -; \n3Multiplicar = *; \n4Dividir = /"))

// Escolhendo Condicionais

switch(operação){
    case 1:
    let opSoma = numero1 + numero2
    console.log('A operação feita foi ' + operação + ' e o resultado dela é ' + opSoma)
        break;

    case 3:
        let opMultiplicar = numero1 * numero2
        console.log('A operação feita foi ' + operação + ' e o resultado dela é ' + opMultiplicar)
        break;

    case 2:
        let opSubtrair = numero1 - numero2
        console.log('A operação feita foi ' + operação + ' e o resultado dela é ' + opSubtrair)
        break;

    case 4:
        let opDividir = numero1 / numero2
        console.log('A operação feita foi ' + operação + ' e o resultado dela é ' + opDividir)
       break;

    default:
        break;
}
