// #2 Exercício : RH DoDev //
let continuar = 0
let nome = ""
let idade = 0
let salario = 0
do {
    nome = prompt("Informe seu nome:")
    idade = prompt("Informe sua idade:")
    salario = Number(prompt("Informe seu salário:"))
    console.log(`Prazer ${nome}, você tem ${idade} anos e possui um salário de R$${salario}`)

 continuar = Number(prompt("\n Digite 1 - Seus dados estão corretos / \n Digite 2 - Informar dados novamente"))
}while(continuar == 2);

let anoAtual = 2025
let taxaAumento =  0.015
let anosProjecao = 10
    console.log(`Previsão salarial para os próximos ${anosProjecao} anos`)

for (let i = anoAtual; i <= anoAtual + anosProjecao; i++) {
        salario += salario * taxaAumento;
        taxaAumento *= 2 // para que corresponda ao dobro do ano anterior
        console.log(i + " = " + "R$" + salario.toFixed(2)) 
    }

