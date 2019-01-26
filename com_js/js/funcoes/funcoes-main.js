operador=new Array();
status = 'off';
limparVisor=false;
pont = false;
visor = 'aberto';
operador[0]='';// valor do display antes de clicar no operador
operador[1]='';// operador
operador[2]='';// valor do display depois de clicar no operador
function iniciar(){
	$('#display').text('0');
	$('#on').hide();
	$('#ce').show();
	status='on';
	pont=false;
	visor='aberto';
}
function desligar(){
	$('#display').text('');
	$('#on').show();
	$('#ce').hide();
	status='off';
	visor='fechado';
}
function resetar(){
	$('#display').text('0');
	status='ce';
	pont=false;
	visor='aberto';
}

function ponto(){
	if((pont==false)&&(visor=='aberto')){
		var c = $('#display').text();
		$('#display').text(c+'.');
		pont=true;
	}
}
function digito(n){
	if(visor=='aberto'){
		contaDigito();
		if(limparVisor == false){
			var c = $('#display').text();
			if(pont==true){
				$('#display').text(c+n);
			}else if(c == '0'){
				$('#display').text(n);
			}else{
				$('#display').text(c+n);
			}
		}else{
			$('#display').text(n);
			limparVisor=false;
		}

	}
}
function error(){
	desligar();
	$('#display').html("<span style='color: red; border: 0;'>ERROR</span>");
}
function contaDigito(){
	tot = $('#display').text().length;
	if(pont==true){
		tot -= 1;
	}if(tot == 7){
		visor = 'fechado';
	}
}
function formatarResultado(str){
	if(str.length>8){
		n2=str.split('');
		n2.splice(9,str.length);
		$('#display').text(n2.join(''));
	}else{
		$('#display').text(str);
	}
	i=parseInt(str);
	s = i.toString();
	if(s.length>8){
		error();
	}
}