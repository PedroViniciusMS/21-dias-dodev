//Declaração de Variáveis e solicitando informações ao usário
let nomeUsuário = prompt('Digite seu nome');
let nascimentoUsuário = prompt('Ano de nascimento');
let alturaUsuário = parseFloat(prompt('Sua altura (m)'));
let pesoUsuário = prompt('Qual seu peso (kg)?');

//Calculando a idade e o IMC
let idadeUsuário = 0
idadeUsuário = 2024 - nascimentoUsuário;
let imcUsuário = 0
imcUsuário = (pesoUsuário / (alturaUsuário * alturaUsuário));

//Exibindo as informções no console
console.log('Olá ' + nomeUsuário + ', você tem ' + idadeUsuário + ' anos, nasceu em ' + nascimentoUsuário + ' tem ' + alturaUsuário + ' de altura, pesa ' + pesoUsuário + 'Kg seu IMC é ' + imcUsuário + ' Kg/m2')