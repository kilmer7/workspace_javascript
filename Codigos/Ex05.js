var num = parseInt(prompt('Digite um número: '));
var i = 1;
var result = 0;
while(i < 11){
	result = num * i;
	document.write(num + ' x ' + i + ' = ' + result + '<br>') ;
	i++;
}