// Desafio dia 4 #Motorista

// Informações do Usuário
const nomeUsuário = prompt('Digite seu nome')
const idadeUsuário = Number(prompt('Digite sua idade'))
const cnh = prompt('Possui CNH? (sim/nao)')
const carro = prompt('Possui carro? (sim/nao)')

// Condicionais
if(idadeUsuário < 18 || cnh === 'nao'){
console.log(nomeUsuário + ', você não pode dirigir.')
}else if(idadeUsuário >= 18 && cnh === 'sim' && carro === 'nao'){
    console.log(nomeUsuário + '! você pode dirigir, mas não tem carro')
}else{
    console.log(nomeUsuário + ', você será o motorista!')
}