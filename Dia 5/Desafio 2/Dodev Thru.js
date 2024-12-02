// Desafio Dia #5 (Dodev Thru)

// Qustionário
let posto = prompt('abastecer ou calibrar?')

if(posto === "abastecer"){
     posto = prompt('gasolina ou álcool?')
}

// Litro Abastecido

const tipoPosto = posto
let valor = parseInt(prompt('Valor? (R$)'))

// Alternativas
switch(tipoPosto){
    case "gasolina":
        let litroGasolina = valor / 5

        console.log("Você abasteceu R$" + litroGasolina.toFixed(2) + " litros de gasolina!")
        break;

    case "álcool":
        let litroAlcool = valor / 3
        
        console.log("Você abasteceu R$" + litroAlcool.toFixed(2) + " litros de álcool!")
        break;

    default:
       console.log('Pneus calibrados com sucesso!')
        break;
}