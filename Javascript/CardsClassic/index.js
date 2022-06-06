import menFunc from '/scripts/menObj.js'

//Rewrite this entire file. The code sucks.
//Eventually have a playscrn before this.

const bMenu = menFunc(); 

function baseMenu(int){
	switch(int){
		default: bMenu.menRslt();
		break;
		case 1: bMenu.gameRslt();
		break;
		case 2: bMenu.cardRslt();
		break;
		case 3: bMenu.optRslt();
		break;
		case 4: bMenu.credRslt();
		break; }
};

(function init(){
	const b3 = document.getElementById('border3');
	const menBtn = document.createElement('button');
	const gameBtn = document.createElement('button');
	const skinBtn = document.createElement('button');
	const optBtn = document.createElement('button');
	const credBtn = document.createElement('button');
	
	menBtn.appendChild(document.createTextNode('Menu')); 
	gameBtn.appendChild(document.createTextNode('Games'));
	skinBtn.appendChild(document.createTextNode('Skins'));
	optBtn.appendChild(document.createTextNode('Options'));
	credBtn.appendChild(document.createTextNode('Credits'));
	
	menBtn.className = 'ftbtn';
	gameBtn.className = 'ftbtn';
	skinBtn.className = 'ftbtn';
	optBtn.className = 'ftbtn';
	credBtn.className = 'ftbtn';
	
	menBtn.id = 'menBtn';
	gameBtn.id = 'gameBtn';
	skinBtn.id = 'skinBtn';
	optBtn.id = 'optBtn';
	credBtn.id = 'credBtn';
	
	menBtn.addEventListener('click', () => 
	{ baseMenu(0); } ); 
	gameBtn.addEventListener('click', () => 
	{ baseMenu(1); } ); 
	skinBtn.addEventListener('click', () => 
	{ baseMenu(2); } ); 
	optBtn.addEventListener('click', () => 
	{ baseMenu(3); } ); 
	credBtn.addEventListener('click', () => 
	{ baseMenu(4); } ); 
	
	b3.appendChild(menBtn);
	b3.appendChild(gameBtn);
	b3.appendChild(skinBtn);
	b3.appendChild(optBtn);
	b3.appendChild(credBtn); })();
