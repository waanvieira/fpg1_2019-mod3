
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