var nome = prompt('Qual é o seu nome: ');
var alt = parseFloat(prompt('Qual sua altura?(escrever em centimetros)'));
var peso = parseFloat(prompt('Qual o seu peso?'));

alt = alt / 100;
var IMC = peso / (alt * alt);
var faixa = '';

if(IMC < 16){
	faixa = 'Baixo peso muito grave';
}else if(IMC > 16 && IMC < 16.99){
	faixa = 'Baixo peso grave';
}else if(IMC > 17 && IMC < 18.49){
	faixa = 'Baixo peso';
}else if(IMC > 18.50 && IMC < 24.99){
	faixa = 'peso normal';
}else if(IMC > 25 && IMC < 29.99){
	faixa = 'Sobrepeso';
}else if(IMC > 30 && IMC < 34.99){
	faixa = 'Obesidade grau I';
}else if(IMC > 35 && IMC < 39.99){
	faixa = 'Obesidade grau II';
}else if(IMC > 40){
	faixa = 'Obesidade grau III';
}

document.write(nome + ' possui índice de massa corporal igual a ' + IMC + ', sendo classificado como: ' + faixa);