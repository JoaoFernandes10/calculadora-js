function onOffCe(){
	$('#on').click(function(){
		if((status=='off')||(status=='ce')){
			iniciar();
		}
	});
	$('#off').click(function (){
		if((status =='on')||(status =='ce')){
			desligar();
		}
	});
	$('#ce').click(function(){
		if((status=='on')||(status=='ce')){
			resetar();
		}
	});
}
function numero(){
	$('#sete').click(function(){
		if((status=='on')||(status=='ce')){
			digito(7);
		}
	});
	$('#oito').click(function(){
		if((status=='on')||(status=='ce')){
			digito(8);
		}
	});$('#nove').click(function(){
		if((status=='on')||(status=='ce')){
			digito(9);
		}
	});
	$('#quatro').click(function(){
		if((status=='on')||(status=='ce')){
			digito(4);
		}
	});
	$('#cinco').click(function(){
		if((status=='on')||(status=='ce')){
			digito(5);
		}
	});$('#seis').click(function(){
		if((status=='on')||(status=='ce')){
			digito(6);
		}
	});
	$('#um').click(function(){
		if((status=='on')||(status=='ce')){
			digito(1);
		}
	});
	$('#dois').click(function(){
		if((status=='on')||(status=='ce')){
			digito(2);
		}
	});
	$('#tres').click(function(){
		if((status=='on')||(status=='ce')){
			digito(3);
		}
	});
	$('#zero').click(function(){
		if((status=='on')||(status=='ce')){
			digito(0);
		}
	});
	$('#ponto').click(function(){
		if(pont==false){
			if((status=='on')||(status=='ce')){
				ponto();
			}
		}
	});
}
function operadores(){
	$('#raiz').click(function (){	
		if((status=='on')||(status=='ce')){
			raiz();
		}
	});
	$('#dividir').click(function(){
		if((status=='on')||(status=='ce')){
			dividir();
		}
	});

	$('#vezes').click(function(){
		if((status=='on')||(status=='ce')){
			vezes();
		}
	});


	$('#soma').click(function(){
		if((status=='on')||(status=='ce')){
			soma();
		}
	});


	$('#menos').click(function(){
		if((status=='on')||(status=='ce')){
			menos();
		}
	});


	$('#porcent').click(function(){
		if(operador[1]!==''){
			if((status=='on')||(status=='ce')){
				porcento();
			}
		}
	});

	$('#igual').click(function(){
		if(operador[1]!==''){
			if((status=='on')||(status=='ce')){
				igual();
			}
		}
	});
}