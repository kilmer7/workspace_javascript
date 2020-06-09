// Variáveis do Jogo
var canvas, ctx, frames, alt, lar = 0, maxPulos = 3, velocidade = 6;
var estadoAtual;
//Aula 04
var estados = {
	jogar: 0,
	jogando: 1,
	perdeu: 2

};

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

  //Metodo 
  atualizar: function() {
    this.velocidade += this.gravidade;
    this.y += this.velocidade;
	//Aula 04
    if(this.y > chao.y - this.alt && estadoAtual != estados.perdeu){
      this.y = chao.y - this.alt;
      this.pulos = 0;
	  this.velocidade = 0;
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
//Aula 03
},
	//Objeto Obstaculo
	obstaculos = {
		_obs: [],
		cores: ["#ffbc1c", "#ff1c1c", "#ff85e1", "#52a7ff", "#78ff5d"],
		tempoIns: 0,
		
		//Metodo
		insere: function(){
			this._obs.push({
				x: lar,
				largura: 30 + Math.floor(21 * Math.random()),
				altura: 30 + Math.floor(120 * Math.random()),
				cor: this.cores[Math.floor(5 * Math.random())]
			});
			this.tempoIns = 30 + Math.floor(20 * Math.random());
		},
		
		atualizar: function() {
			if(this.tempoIns == 0){
				this.insere();
			}else{
				this.tempoIns--;
			}
			for(var i = 0, tam = this._obs.length; i < tam; i++){
				var newObs = this._obs[i];
				newObs.x -= velocidade;
				//Aula 04
				if(bloco.x < newObs.x + newObs.largura && bloco.x + bloco.lar >= newObs.x && bloco.y + bloco.alt >= chao.y - newObs.altura){
					estadoAtual = estados.perdeu;
				}else if(newObs <= -newObs.largura){
					this._obs.splice(i, 1);
					tam--;
					i--;
				}
			}
		},
		//Aula 04
		limpar: function(){
			this._obs = [];
		},

		desenhar: function() {
			for(var i = 0, tam = this._obs.length; i < tam; i++){
				var obs = this._obs[i];
				ctx.fillStyle = obs.cor;
				ctx.fillRect(obs.x, chao.y - obs.altura, obs.largura, obs.altura);
			}
		},
	};

// Funções Gerais
function clique(event){
	//Aula 04
   if(estadoAtual == estados.jogando){
	bloco.pular();
   }else if(estadoAtual == estados.jogar){
    estadoAtual = estados.jogando;
   }else if(estadoAtual == estados.perdeu && bloco.y >= 2 * alt){
	estadoAtual = estados.jogar;
	bloco.velocidade = 0;
	bloco.y = 0;
   }
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
  
  //aula 04 
  estadoAtual = estados.jogar;
  loop();
}

function loop(){
  update();
  draw();

  window.requestAnimationFrame(loop);
}

function update(){
  frames++;
  //Aula 04
  bloco.atualizar();
  if(estadoAtual == estados.jogando){
	  obstaculos.atualizar();
  }else if(estadoAtual == estados.perdeu){
	obstaculos.limpar();
  }
}

function draw(){
  ctx.fillStyle = "#50beff";
  ctx.fillRect(0, 0, lar, alt);
  //Aula 04 
  if(estadoAtual == estados.jogar){  
	ctx.fillStyle = "green";
	ctx.fillRect( lar / 2 - 50, alt / 2 - 50, 100, 100);
  }else if(estadoAtual == estados.perdeu){
	ctx.fillStyle = "red";
	ctx.fillRect( lar / 2 - 50, alt / 2 - 50, 100, 100);
  }else if(estadoAtual == estados.jogando){
	obstaculos.desenhar();
  }
  
  chao.desenhar();
  bloco.desenhar();
}

main();