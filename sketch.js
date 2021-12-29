//Variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 25;
let Raio = dBolinha / 2 ; 

//Variaveis da Velocidade da Bolinha
let VelocidadeYDaBolinha = 2;
let VelocidadeXDaBolinha = 2;

//Variaveis da Raquete
let xRaquete = 5;
let yRaquete = 150;
let ComprimentoRaquete = 10;
let AlturaRaquete = 90;

//Variaveis da Raquete do Oponente
let xRaquetedoOponente = 585;
let yRaquetedoOponente = 150;

//Variaveis da Velocidade da Raquete do Oponente
let VelocidadeYRaquetedoOponente;


let Colidiu = false;

//Placar do jogo
let meuPontos = 0;
let OsPontosdoOponente = 0;

//Sons
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  pontoo = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
                     
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  Bolinha();
  MovimentoDaBolinha();
  VerificaColisaoBorda();
  Raquete(xRaquete , yRaquete);
  MovimentoDaRaquete();
  //VerificaColisaoComRaquete();
  VerificaColisaoComRaqueteBiblioteca(xRaquete , yRaquete);
  Raquete( xRaquetedoOponente , yRaquetedoOponente);
  //MovimentoDaRaquetedoOponente();
  VerificaColisaoComRaqueteBiblioteca(xRaquetedoOponente , yRaquetedoOponente);
  IncluirPlacar();
  marcaPonto();
  
}

//Bolinha;
function Bolinha(){
   circle(xBolinha,yBolinha,dBolinha)

}

function MovimentoDaBolinha(){
  xBolinha += VelocidadeXDaBolinha;
  yBolinha += VelocidadeYDaBolinha; 
  
}

function VerificaColisaoBorda(){
  if (xBolinha+Raio >width || xBolinha-Raio<0) {
    VelocidadeXDaBolinha *= -1 ;
  }
  
   if (yBolinha+Raio>height || yBolinha-Raio<0) {
    VelocidadeYDaBolinha *= -1 ;
  }
}

//MinhaRaquete
function Raquete(x , y ){
   rect(x,y , ComprimentoRaquete , AlturaRaquete)

}

function MovimentoDaRaquete(){
  if (keyIsDown(UP_ARROW)) {yRaquete -= 10;}
  if (keyIsDown(DOWN_ARROW)) {yRaquete += 10;}

}

function VerificaColisaoComRaquete() {
  if (xBolinha - Raio  < xRaquete + ComprimentoRaquete && yBolinha - Raio  < yRaquete + ComprimentoRaquete && yBolinha + Raio  > yRaquete + ComprimentoRaquete ){
    VelocidadeXDaBolinha *= -1
  }
  
}

function VerificaColisaoComRaqueteBiblioteca(x , y ){
  Colidiu = collideRectCircle(x, y, ComprimentoRaquete, AlturaRaquete , xBolinha, yBolinha, Raio);
  if (Colidiu){
    VelocidadeXDaBolinha *= -1;
              }
}

//Movimento da Raquete do Oponente
function MovimentoDaRaquetedoOponente(){
  VelocidadeYRaquetedoOponente = yBolinha - yRaquetedoOponente - ComprimentoRaquete / 2 - 50;
  yRaquetedoOponente += VelocidadeYRaquetedoOponente;
}

//Placar
function IncluirPlacar(){
  textAlign(CENTER);
  textSize(16);
  fill(255,140,0);
  stroke(255);
  rect(430 , 10 , 40 , 20)
  rect(130 , 10 , 40 , 20)
  fill(255);
  text(meuPontos,150,25);
  text(OsPontosdoOponente,450,25);
}


function marcaPonto(){
  if (xBolinha > 590){
    meuPontos += 1;
  }
  if (xBolinha < 10){
    OsPontosdoOponente += 1;
  }
}


