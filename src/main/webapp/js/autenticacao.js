
//funções da pagina index
function mundo(){
	var a = document.getElementById("variavel").value;
	if(document.getElementById("variavel").value == ""){
		alert("Digite um nome");
		return false;
	}	
	else alert(a);
}

function calcular(){
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2").value;
	
	var resultado = parseInt(n1) + parseInt(n2);
	alert("O resultado é " + resultado);
}

//CalculoFinanceiro = function(){}
//criacao de método
/*CalculoFinanceiro.prototype.calculoPorgentagem = function() {
	var v1 = document.getElementById("v1").value;
	var p = document.getElementById("p").value;
	
	resultado = (v1 * p)/100;
	aler("Resultado é: " + resultado)
	return resultado;	
}
//Instanciando o objeto
cf = new CalculoFinanceiro()
f = cf.calculoPorgentagem(v1, p);
//resultado
alert(resultado);
*/

//OU OUTRA FORMA
CalculoFinanceiro = function() {
	
	//criacao do metodo
	this.calculoPorgentagem = function(v1, p) {		
		resultado = (v1 * p)/100;
		aler("Resultado é: " + resultado)
		return resultado;	
	}
	
	this.aoClicarCalcular = function() {
		//leitura dos valores dos campos
		var v1 = document.getElementById("v1").value;
		var p = document.getElementById("p").value;
		
		//Invoca metodos calculo
		r = this.calculoPorgentagem(v1, p)

		//exibe mensagem de alerta
		window.alert(r);
	}
}

//instancia Objeto
cf = new CalculoFinanceiro();

/*
function mostraArray(){
	var cars = ["Uno","Gol","Monza","Tempra","Parati"];
	for( i = 0; i < cars.length; i++){
		alert(cars[i]);		
	}
	alert("O numero de carros é: " + cars.count);
}
*/