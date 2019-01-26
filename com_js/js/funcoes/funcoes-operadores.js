function raiz(){
	n=parseFloat($('#display').text());
	n1 = Math.sqrt(n).toString();
	formatarResultado(n1);
	visor='fechado';
}
function dividir(){
	operador[0]=parseFloat($('#display').text());
	operador[1]='dividir';
	limparVisor=true;
	visor='aberto';
}

function vezes(){
	operador[0]=parseFloat($('#display').text());
	operador[1]='vezes';
	limparVisor=true;
	visor='aberto';
}

function soma(){
	operador[0]=parseFloat($('#display').text());
	operador[1]='soma';
	limparVisor=true;
	visor='aberto';
}

function menos(){
	operador[0]=parseFloat($('#display').text());
	operador[1]='menos';
	limparVisor=true;
	visor='aberto';
}


function porcento(){
	operador[2]=parseFloat($('#display').text());
	$('#display').text('');
	switch(operador[1]){
		case 'dividir':
			res = (operador[0]/operador[2])*100;
			operador[1]='';
		break;
		case 'vezes':
			res = operador[0]*(operador[2]/100);
			operador[1]='';
		break;
		case 'soma':
			res = (operador[0]*(operador[2]/100))+operador[0];
			operador[1]='';
		break;
		case 'menos':
			res = operador[0]-(operador[0]*(operador[2]/100));
			operador[1]='';
		break;
		default:
			$('#display').text('0');
	}
	res=res.toString();
	formatarResultado(res);
}

function igual(){
	operador[2]=parseFloat($('#display').text());
	$('#display').text('');
	switch(operador[1]){
		case 'dividir':
			res = operador[0]/operador[2];
			operador[1]='';
		break;
		case 'vezes':
			res = operador[0]*operador[2];
			operador[1]='';
		break;
		case 'soma':
			res = operador[0]+operador[2];
			operador[1]='';
		break;
		case 'menos':
			res = operador[0]-operador[2];
			operador[1]='';
		break;
		default:
			$('#display').text('0');
	}
	res=res.toString();
	formatarResultado(res);
}