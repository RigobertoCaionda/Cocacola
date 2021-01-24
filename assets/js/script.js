function expandir(){
	let search = document.getElementById("search");
	let faTimes = document.querySelector(".menuRight .fas.fa-times");
	faTimes.style.marginRight = "0";
	search.style.cursor = 'default';
}
function fechar(){
	let faTimes = document.querySelector(".menuRight .fas.fa-times");
	let search = document.getElementById("search");
	if(document.querySelector("body").clientWidth > 767 && document.querySelector("body").
		clientWidth < 1024){
		faTimes.style.marginRight = "-263px";
	}else if(document.querySelector("body").clientWidth >= 1024){
		faTimes.style.marginRight = "-382px";
	}else if(document.querySelector("body").clientWidth >=321 && document.querySelector("body").
		clientWidth < 768){
		faTimes.style.marginRight = "-130px";
	}else if(document.querySelector("body").clientWidth < 321){
		faTimes.style.marginRight = "-131px";
	}
	search.style.cursor = 'pointer';
}
function expandirMenu(){
	let menu = document.getElementById("menu");
	let logo = document.querySelector(".logo");
	if(menu.style.marginLeft=='-700px'){
		menu.style.marginLeft='0';
		logo.style.opacity=0.3;
	}else{
		menu.style.marginLeft='-700px';
		logo.style.opacity=1;
	}
}

function fecharMenu(){
	let logo = document.querySelector(".logo");
	logo.style.opacity=1;
	document.getElementById("menu").style.marginLeft='-700px';
}
function targetEvent(event) {
	if(event.target.nodeName != "IMG" && event.target.nodeName != "SPAN"){
		let menu = document.getElementById("menu");
		let logo = document.querySelector(".logo");
		menu.style.marginLeft='-700px';
		logo.style.opacity=1;
	}
	
}

function scroll(){
	let logo = document.querySelector('.logo');
	let menuLeft = document.querySelector('.menuLeft');
	let cabecalho = document.querySelector('.cabecalho');
	let icones = document.querySelector('.cabecalho .menuRight i');
	let search = document.querySelector('.search i');
	let palavraMenu = document.querySelector('.palavraMenu');
	let fechar = document.getElementById("fechar");
	let menu = document.querySelector(".menu");
	let searchX = document.querySelector(".cabecalho .menuRight .search");
	searchX.style.borderLeft="1px solid #000";
	menu.style.marginLeft="-700px";
	fechar.style.color="#000";
	palavraMenu.style.color="#000";
	search.style.color="#000";
	icones.style.color="#000";
	cabecalho.style.backgroundColor="#d3d3d3";
	menuLeft.style.opacity=0.5;
	logo.style.width = 120+"px";
	logo.style.height= 120+"px";
	logo.style.lineHeight=120+"px";
	logo.style.fontSize=17+"px";
}