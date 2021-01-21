function expandir(){
	let form = document.getElementById("form");
	let fechar = document.getElementById("fechar");
	let search = document.getElementById("search");
	form.style.display='block';
	fechar.style.display='block';
	search.style.cursor = 'default';
}
function fechar(){
	let form = document.getElementById("form");
	let fechar = document.getElementById("fechar");
	let search = document.getElementById("search");
	form.style.display='none';
	fechar.style.display='none';
	search.style.cursor = 'pointer';
}
function expandirMenu(){
	let menu = document.getElementById("menu");
	menu.style.display='block';
}

function fecharMenu(){
	document.getElementById("menu").style.display='none';
}
function targetEvent(event) {
	if(event.target.nodeName != "IMG" && event.target.nodeName != "SPAN"){
		let menu = document.getElementById("menu");
		menu.style.display='none';
	}
	/*O event.target.NodeName mostra quem fez o evento ser disparado e o event.cuurentTarget.nodeName
	mostra onde foi colocada a funcao que chamou o evento, ou seja, quem e o pai do evento.
	*/
}

function diminuirLogo(){
	let logo = document.querySelector('.logo');
	let cabecalho = document.querySelector('.cabecalho');
	let icones = document.querySelector('.cabecalho .menuRight i');
	let search = document.querySelector('.search i');
	let video = document.querySelector('.video');
	let palavraMenu = document.querySelector('.palavraMenu');
	let fechar = document.getElementById("fechar");
	fechar.style.color="#000";
	palavraMenu.style.color="#000";
	video.style.top=160+"px";
	search.style.color="#000";
	icones.style.color="#000";
	cabecalho.style.height=160+"px";
	cabecalho.style.backgroundColor="#d3d3d3";
	cabecalho.style.opacity=0.5;
	logo.style.width = 140+"px";
	logo.style.height= 140+"px";
	logo.style.lineHeight=140+"px";
	logo.style.fontSize=18+"px";
}