// #1 Exercício : Conhecendo seu usuário //
do {
let nome = prompt("Qual seu nome?")
let idade = parseInt(prompt("Qual sua idade?"))
let peso = parseInt(prompt("Qual seu peso atual?"))
let altura = parseFloat(prompt("Qual sua altura?"))
let profissão = prompt("Qual sua profissão?")


console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissão}, tem ${altura}M de altura e pesa ${peso}Kg.`)

    if(idade >= 18) {
        console.log("Está liberado para tomar umas geladas.")
    }else {
        console.log("Sem gelada para você.")
    }
let idadeM = idade * 12 
let idadeS = idade * 48
let idadeD = idade * 365
    console.log(`Você tem ${idadeM} meses de vida, tem ${idadeS} semanas de vida e ${idadeD} dias de vida.`)

//IMC DO USUÁRIO//
let IMC = peso / (altura * altura)
let faixa
        if (IMC < 18.5) {
            faixa = "Magreza"
            console.log(`Você tem ${IMC}Kg/m2 e sua faixa indica ${faixa}.`)
        } else if (IMC >= 18.5 && IMC < 24.9) {
            faixa = "Normal"
            console.log(`Você tem ${IMC}Kg/m2 e sua faixa indica ${faixa}.`)
        }else if (IMC >= 24.9 && IMC <= 30) {
            faixa = "Sobrepeso"
            console.log(`Você tem ${IMC}Kg/m2 e sua faixa indica ${faixa}.`)
        }else if (IMC > 30) {
            faixa = "Obesidade" 
            console.log(`Você tem ${IMC}Kg/m2 e sua faixa indica ${faixa}.`)
        }
//ANO DE NASCIMENTO//
let anoNascimento = 2024 - idade
let contador = 0
let anoVivido = anoNascimento + 1

for (let i = anoVivido; i <= 2025; i++) {
    contador++
    console.log(`Você nasceu em ${anoNascimento} / ${i} - ${contador} anos de idade`)
    }
continuar = parseInt(prompt("\n1 = finalizar o programa / \n2 = inserir novos dados"))

} while (continuar === 2);

