//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 9;
let velocidadeYBolinha = 9;

let velocidadeYOponente

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let colidiu = false;

// placar do jogo
let meusPontos = 0
let pontosDoOponente = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("green");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaMinhaRaquete();
  // verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  colisaoOponenteRaqueteBiblioteca();
  incluiPlacar();
  marcaPontos();
}

function mostraBolinha() {
  fill("black")
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  fill("yellow")
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
 function movimentaRaqueteOponente(){
 if(keyIsDown(87)) {
    yRaquete -= 10;
  }
  if(keyIsDown(83)) {
    yRaquete += 10;
  }
 }

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
}


 function colisaoOponenteRaqueteBiblioteca() {
  colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadeXBolinha *= -1;
  }
 }


  function incluiPlacar(){
    textSize(15)
     fill(220)
    rect(265,  13,  35, 25 )
   fill("black") 
   text(meusPontos , 278, 26)
   fill(255)
   rect(320, 13, 35, 25)
    
    fill(0)
    text(pontosDoOponente, 330, 26)
  }
    function marcaPontos() {
  if (xBolinha > 581) {
    meusPontos += 1;
  }
  if (xBolinha < 11) {
    pontosDoOponente += 1;
  }
}
  
