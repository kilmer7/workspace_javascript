  		   var x = canvas.width - 10;
		   var y = 0;

		   var img = new Image();
		   img.src= "imgs/asteroides.png"
		   img.onload= function (){
				ctx.drawImage(img, 0, 0, 45, 48
								, x, y, 45, 48)
		   }