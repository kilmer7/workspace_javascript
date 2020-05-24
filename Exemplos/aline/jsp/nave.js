		   var x = 0;
		   var y = 0;
		   
		   var veloNave = 10;
		   var pressionada = [];
		   
		   var img = new Image();
		   img.src= "imgs/alien.png"
		   img.onload= function (){
				ctx.drawImage(img, x, y, 100, 51);
		   }
		   
		   nave();
		   
		   function nave(){
				//limpa o canvas
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(img, x, y, 100, 51);
				mover();
				
				window.requestAnimationFrame(nave);
		   }
		   
		   
		   //funções de apoio
		   //detecta teclado
		   
		   document.addEventListener('keydown', function(e){
			pressionada[e.keyCode] = true;		   
		   });
		   
		   document.addEventListener('keyup', function(e){
			pressionada[e.keyCode] = false;
		   });
		   
		   function mover(){
				
				if(pressionada[37]) esquerda();
				if(pressionada[38]) cima();
				if(pressionada[39]) direita();
				if(pressionada[40]) baixo();
				if(pressionada[65]) esquerda();
				if(pressionada[87]) cima();
				if(pressionada[68]) direita();
				if(pressionada[83]) baixo();
		   }
		   
		   function esquerda(){
		   
			x-= veloNave;
		   
		   }
		   
		   function cima(){
		   
			y-=	veloNave;
			
		   }
		   
		   function direita(){
		   
			x+= veloNave;
		   
		   }
		   
		   function baixo(){
		   
			y+= veloNave;
		   
		   }