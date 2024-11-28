// Desafio jantar especial Dia 4

//  Criando variáveis
let fome = ''
let dinheiro = ''
let aberto = ''

// Fazendo questionários
sim = true
não = false
fome = prompt("Você está com fome?") === 'sim'
dinheiro = prompt('você tem dinheiro?') === 'sim'
aberto = prompt('O restaurante está aberto?') === 'sim'

// Criando condicionais
if(fome && dinheiro && aberto){
console.log('Hoje o jantar será no seu restaurante preferido!')
}else if((fome === dinheiro) !== aberto){
    console.log('Peça um delivery!')
}else{
    console.log('Hoje a janta será em casa')
}