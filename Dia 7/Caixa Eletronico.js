//Desafio Dia 07 #USO DO DOWHILE# EXERCÍCIO 02

// Solicitando Dados
let nome = prompt('Digite seu nome:')
let cpf = Number(prompt('Digite seu CPF:'))

//CRIANDO VARIÁVEIS
let valor = 0
let opcao = 0
let saldoTotal = 1000
let continuar = 0
let maiorValor = 0
let mediaValores = 0
let media = 0

//Gerando loop
do{
    valor = parseInt(prompt('Digite um valor:'))
    opcao = Number(prompt('Saque ou Depósito? \n1 = saque; \n2 = Depóstio'))

        if(opcao == 1 && valor > 0){
            if(valor <= saldoTotal){
                saldoTotal -= valor
                console.log('Olá ' + nome + ' seu saldo atual é: R$' + saldoTotal)

            }else{
            console.log('Você não possui fundos suficientes!')
             }
        }else if(opcao == 2 && valor > 0){
            saldoTotal += valor
            console.log('Olá ' + nome + ' seu saldo atual é: R$' + saldoTotal)

        }
        
    //DEFININDO MAIOR VALOR INSERIDO
        if(valor > maiorValor){
           maiorValor = valor 
        }
    //DEFININDO A MÉDI DOS VALORES INSERIDOS
        mediaValores += valor
        media++
        
    continuar = Number(prompt('Deseja continuar? \n1 = Sim; \n2 = Não'))    
}while(continuar == 1)

//Exibindo Resultado

console.log('Saldo final: R$' + saldoTotal)
console.log('Maior valor inserido: R$' + maiorValor)
console.log('Média dos valores inseridos: ' + (mediaValores / media))