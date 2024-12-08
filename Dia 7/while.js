//Desafio Dia 07 #USO DO WHILE#

//Dados & Qustionário

//Criando algoritimo e variáveis
let algoritimo = true
let somaNotas = 0 // Acumula o total de notas
let totalAlunosL = 0 // Conta o numero de alunos cadastrados
let totalHomens = 0 // conta o numero de homens cadastrados
let totalMulheres = 0
let maiorNota = 0

while(algoritimo){
    let nota = Number(prompt('Digite sua nota:'))
    let sexo = Number(prompt('Qual seu sexo? \n1 = Masculino; \n2 = Feminino'))
    let cadastro = Number(prompt('Deseja cadastrar outra nota? \n1 = s; \n2 = n'))
//Média e Total de alunos

     somaNotas += nota // Acumula a nota
     totalAlunosL++ // Incrementa o número de alunos

//Quantidadde de homens e mulheres & maior nota entre os homens
    if(sexo === 1){
        totalHomens++
        if(nota > maiorNota){  // Atualiza a maior nota dos homens
            maiorNota = nota  // Atualiza a maior nota dos homens
        }
    }
    if(sexo === 2 && nota > 7){
        totalMulheres++
    }
    if(cadastro !== 1){
        algoritimo = false
    }
}
//Resumo dos dados fornecidos        
console.log('Média Geral dos Alunos: ' + (somaNotas / totalAlunosL))
console.log('Total de homens que enviaram as notas: ' + totalHomens)
console.log('Total de mulheres com nota acima de 7: ' + totalMulheres)
console.log("Maior nota entre os homens foi: " + maiorNota)