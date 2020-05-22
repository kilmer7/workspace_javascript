// Variáveis do Jogo
var canvas, ctx, frames, alt, lar = 0, maxPulos = 3;

// Objeto Chão
var chao = {
  y: 550,
  altura: 50,
  cor: "#fff",

  desenhar: function() {
    ctx.fillStyle = this.cor;
    ctx.fillRect(0, this.y, lar, this.altura);
  }

};

// Objeto Personagem
var bloco = {
  x: 50,
  y: 0,
  alt: 50,
  lar: 50,
  cor: "#000",
  gravidade: 1.5,
  velocidade: 0,
  forcaDoPulo: 15,
  pulos: 0,

  atualizar: function() {
    this.velocidade += this.gravidade;
    this.y += this.velocidade;

    if(this.y > chao.y - this.alt){
      this.y = chao.y - this.alt;
      this.pulos = 0;
    }
  },

  pular: function() {
    if(this.pulos < maxPulos){
      this.velocidade = -this.forcaDoPulo;
      this.pulos++;
    }
  },

  desenhar: function() {
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, this.lar, this.alt);
  }

};

// Funções Gerais
function clique(event){
  bloco.pular();
}

function main(){
  alt = window.innerHeight;
  lar = window.innerWidth;

  if(lar >= 500){
    lar = 600;
    alt = 600;
  }

  // Criando o Canvas
  canvas = document.createElement("canvas");
  canvas.width = lar;
  canvas.height = alt;
  canvas.style.position = "absolute";
  canvas.style.top = "0px";
  canvas.style.bottom = "0px";
  canvas.style.left = "0px";
  canvas.style.right = "0px";
  canvas.style.margin = "auto";
  canvas.style.border = "10px solid #000";

  ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);

  document.addEventListener("mousedown", clique);

  loop();
}

function loop(){
  update();
  draw();

  window.requestAnimationFrame(loop);
}

function update(){
  frames++;

  bloco.atualizar();
}

function draw(){
  ctx.fillStyle = "#50beff";
  ctx.fillRect(0, 0, lar, alt);

  chao.desenhar();
  bloco.desenhar();
}

main();