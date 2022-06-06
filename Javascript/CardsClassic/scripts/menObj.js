import genIntrn from '/scripts/menIntrn.js'

//Here initialize the base-menu elements.

export default () => {
	const menFunc = {};
	
	menFunc.menRslt = menRslt;
	menFunc.gameRslt = gameRslt;
	menFunc.cardRslt = cardRslt;
	menFunc.optRslt = optRslt;
	menFunc.credRslt = credRslt;
	
	menFunc.init = menInit;
	
	return menFunc; };

const menObj = {};
menObj.menDiv = {}; 
menObj.gameDiv = {}; 
menObj.skinDiv = {}; 
menObj.optDiv = {}; 
menObj.credDiv = {};

menObj.menBool = true;
menObj.gameBool = true;
menObj.skinBool = true;
menObj.optBool = true;
menObj.credBool = true;

function menRslt() {
	if(boolObj.menBool){
		mdiv.id = 'leftmenu';
		
		testBtn.className = 'gamebtn';
		mdiv.className = 'menbase';
		
		testBtn.appendChild(document.createTextNode('Test'));
		mdiv.appendChild(testBtn);	
		document.body.appendChild(mdiv); 
		boolObj.menBool = false; }
		else {
		document.body.removeChild(mdiv);	
		boolObj.menBool = true; }; };
		
function gameRslt() {
	if(boolObj.menBool){
		mdiv.id = 'leftmenu';
		
		testBtn.className = 'gamebtn';
		mdiv.className = 'menbase';
		
		testBtn.appendChild(document.createTextNode('Test'));
		mdiv.appendChild(testBtn);	
		document.body.appendChild(mdiv); 
		boolObj.menBool = false; }
		else {
		document.body.removeChild(mdiv);	
		boolObj.menBool = true; }; };
		
function cardRslt() {
	if(boolObj.menBool){
		mdiv.id = 'leftmenu';
		
		testBtn.className = 'gamebtn';
		mdiv.className = 'menbase';
		
		testBtn.appendChild(document.createTextNode('Test'));
		mdiv.appendChild(testBtn);	
		document.body.appendChild(mdiv); 
		boolObj.menBool = false; }
		else {
		document.body.removeChild(mdiv);	
		boolObj.menBool = true; }; };
		
function optRslt() {
	if(boolObj.menBool){
		mdiv.id = 'leftmenu';
		
		testBtn.className = 'gamebtn';
		mdiv.className = 'menbase';
		
		testBtn.appendChild(document.createTextNode('Test'));
		mdiv.appendChild(testBtn);	
		document.body.appendChild(mdiv); 
		boolObj.menBool = false; }
		else {
		document.body.removeChild(mdiv);	
		boolObj.menBool = true; }; };
		
function credRslt() {
	if(boolObj.credBool){
		mdiv.id = 'leftmenu';
		
		testBtn.className = 'gamebtn';
		mdiv.className = 'menbase';
		
		testBtn.appendChild(document.createTextNode('Test'));
		mdiv.appendChild(testBtn);	
		document.body.appendChild(mdiv); 
		boolObj.credBool = false; }
		else {
		document.body.removeChild(mdiv);	
		boolObj.menBool = true; }; };
		
function menInit(){};

function gameInit(){
	menObj.gameDiv = document.createElement("div");
	menObj.gameDiv.id = 'gamemenu';
	
	
	};

function cardInit(){};

function optInit(){};

function credInit() {
/*	
	menObj.credDiv.id = 'credmenu';
	
	Title = [
	document.createTestNode('Programming, Design'),
	document.createTestNode('SBS Poker Deck'),
	document.createTestNode('Dani Maccari Deck'),
	document.createTestNode('DrawsGood Deck'),
	document.createTestNode('Toast Deck'),
	document.createTestNode('Yaomon Deck'),
	document.createTestNode('CazWolf Deck'),
	document.createTestNode('Yewbi Deck'),
	document.createTestNode('Platinum Deck'),
	document.createTestNode('MrEliptik Decks'),
	document.createTestNode('Timberwolf Decks'),
	document.createTestNode('Kenny Decks'),
	document.createTestNode('Agular Decks'),
	document.createTestNode('Zxyonitch Deck'),
	document.createTestNode('VladPenn Deck'),
	document.createTestNode('RisingKnight Deck'),
	document.createTestNode('RadPotato Decks'),
	document.createTestNode('Blackwell Decks') ];
	
	for(var title in Title) {
	var btnInfo = document.createTestNode('Website');
	var btn = document.createElement("button"); 
	var line = document.createElement("hr");
	
	menObj.credDiv.appendChild(line);
	menObj.credDiv.appendChild(title);
	menObj.credDiv.appendChild(btn);	};
	
	var line = document.createElement("hr");
	menObj.credDiv.appendChild(line);*/ };
